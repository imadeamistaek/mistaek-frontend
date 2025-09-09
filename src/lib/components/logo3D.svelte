<script lang="ts">
	import { onMount } from "svelte";
	import * as THREE from "three";
	import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
	import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader.js";
	import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
	import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
	
	let container: HTMLDivElement;
	
	onMount(() => {
		if (!container) return;
		
		// Scene
		const scene = new THREE.Scene();
		
		// Camera
		const camera = new THREE.PerspectiveCamera(
		45,
		container.clientWidth / container.clientHeight,
		0.1,
		1000
		);
		camera.position.z = 4;
		camera.position.x = -2;
		
		// Renderer (transparent!)
		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setClearColor(0x000000, 0); // transparent clear
		renderer.setSize(container.clientWidth, container.clientHeight);
		container.appendChild(renderer.domElement);
		
		// Environment from EXR
		new EXRLoader().load("/studio.exr", (texture) => {
			texture.mapping = THREE.EquirectangularRefractionMapping;
			scene.environment = texture;
		});
		
		// Minimal lights (too many lights make it frosty)
		scene.add(new THREE.AmbientLight(0xffffff, 0.1));
		
		const glassMaterial = new THREE.MeshPhysicalMaterial({
			color: 0x0A0A0A,
			metalness: 0,
			roughness: 0,        // full clarity
			transmission: 1,     // clear glass
			thickness: 2,
			ior: 1.5,
			reflectivity: 0.1,
			clearcoat: 1,
			clearcoatRoughness: 0,
			opacity: 0.48,
			transparent: true,
			side: THREE.DoubleSide
		});
		
		// Load GLB logo
		const loader = new GLTFLoader();
		loader.load(
		"/logo3D.glb",
		(gltf) => {
			const logo = gltf.scene;
			
			// Apply glass material
			logo.traverse((child) => {
				if ((child as THREE.Mesh).isMesh) {
					(child as THREE.Mesh).material = glassMaterial;
				}
			});
			
			// Scale logo to fit viewport height
			const box = new THREE.Box3().setFromObject(logo);
			const size = box.getSize(new THREE.Vector3());
			const maxDim = Math.max(size.x, size.y, size.z);
			const scale = 4 / maxDim;
			logo.scale.setScalar(scale);

			// Center & tilt logo
			const center = box.getCenter(new THREE.Vector3());
			logo.position.sub(center); // center it
			logo.rotation.x = -0.55;
			
			scene.add(logo);
			
			// Postprocessing composer (still transparent)
			const composer = new EffectComposer(renderer);
			composer.renderToScreen = true;
			composer.addPass(new RenderPass(scene, camera));
			
			// Animate
			const animate = () => {
				requestAnimationFrame(animate);
				logo.rotation.y += 0.0008;
				composer.render();
			};
			animate();
		},
		undefined,
		(err) => console.error("Error loading GLB:", err)
		);
		
		// Handle resize
		window.addEventListener("resize", () => {
			camera.aspect = container.clientWidth / container.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(container.clientWidth, container.clientHeight);
		});
	});
</script>

<style>
	div {
		width: 100%; /* smaller size */
		height: 100%;
		position: absolute;
		top: 0px;
		right: 0px;
		left: 0px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		pointer-events: none; /* click through */
	}
</style>

<div class="canvas" bind:this={container}></div>
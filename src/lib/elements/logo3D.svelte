<script lang="ts">
	import { onMount } from "svelte";
	import type * as THREEType from "three";

	let container: HTMLDivElement;
	let showFallback = false;

	// Check if connection is "fast enough"
	const isFastConnection = () => {
		const nav = (navigator as any).connection;
		if (!nav) return true; // assume good if API not supported

		const effectiveType = nav.effectiveType || "4g";
		const downlink = nav.downlink || 10; // Mbps estimate

		return effectiveType === "4g" && downlink > 2;
	};

	// Polyfill for requestIdleCallback
	const requestIdle = (cb: () => void) => {
		if ("requestIdleCallback" in window) {
			(window as any).requestIdleCallback(cb);
		} else {
			setTimeout(cb, 200); // fallback
		}
	};

	onMount(() => {
		// If connection isn’t good → show fallback image
		if (!isFastConnection()) {
			showFallback = true;
			return;
		}

		let cleanup: (() => void) | undefined;

		requestIdle(async () => {
			const THREE = (await import("three")) as typeof THREEType;
			const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js");
			const { EXRLoader } = await import("three/examples/jsm/loaders/EXRLoader.js");
			const { EffectComposer } = await import("three/examples/jsm/postprocessing/EffectComposer.js");
			const { RenderPass } = await import("three/examples/jsm/postprocessing/RenderPass.js");

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

			// Renderer
			const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			renderer.setClearColor(0x000000, 0);
			renderer.setSize(container.clientWidth, container.clientHeight);
			container.appendChild(renderer.domElement);

			// Environment
			new EXRLoader().load("/studio.exr", (texture) => {
				texture.mapping = THREE.EquirectangularRefractionMapping;
				scene.environment = texture;
			});

			// Lights
			scene.add(new THREE.AmbientLight(0xffffff, 0.1));

			// Glass material
			const glassMaterial = new THREE.MeshPhysicalMaterial({
				color: 0x0a0a0a,
				metalness: 0,
				roughness: 0,
				transmission: 1,
				thickness: 2,
				ior: 1.5,
				reflectivity: 0.1,
				clearcoat: 1,
				clearcoatRoughness: 0,
				opacity: 0.48,
				transparent: true,
				side: THREE.DoubleSide
			});

			// Load GLTF logo
			const loader = new GLTFLoader();
			loader.load(
				"/brand/logo3D.glb",
				(gltf) => {
					const logo = gltf.scene;

					// Apply glass material
					logo.traverse((child) => {
						if ((child as THREE.Mesh).isMesh) {
							(child as THREE.Mesh).material = glassMaterial;
						}
					});

					// Scale & center
					const box = new THREE.Box3().setFromObject(logo);
					const size = box.getSize(new THREE.Vector3());
					const maxDim = Math.max(size.x, size.y, size.z);
					const scale = 4 / maxDim;
					logo.scale.setScalar(scale);

					const center = box.getCenter(new THREE.Vector3());
					logo.position.sub(center);
					logo.rotation.x = -0.55;

					scene.add(logo);

					// Postprocessing
					const composer = new EffectComposer(renderer);
					composer.addPass(new RenderPass(scene, camera));

					// Animate
					let frameId: number;
					const animate = () => {
						frameId = requestAnimationFrame(animate);
						logo.rotation.y += 0.0008;
						composer.render();
					};
					animate();

					// Cleanup
					cleanup = () => {
						cancelAnimationFrame(frameId);
						composer.dispose();
						renderer.dispose();
						container.innerHTML = "";
					};
				},
				undefined,
				(err) => console.error("Error loading GLB:", err)
			);

			// Resize
			const handleResize = () => {
				camera.aspect = container.clientWidth / container.clientHeight;
				camera.updateProjectionMatrix();
				renderer.setSize(container.clientWidth, container.clientHeight);
			};
			window.addEventListener("resize", handleResize);

			cleanup = () => {
				window.removeEventListener("resize", handleResize);
				renderer.dispose();
				container.innerHTML = "";
			};
		});

		return () => {
			cleanup?.();
		};
	});
</script>

<style>
	.canvas {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		pointer-events: none; /* lets clicks pass through */
	}

	.fallback {
		width: 200px;
		height: auto;
		position: absolute;
		top: 50%;
		right: 10%;
		transform: translateY(-50%);
		opacity: 0.9;
	}
</style>

{#if showFallback}
	<!-- Static fallback image -->
	<img src="/logoDistortedW.webp" alt="Mistaek Logo" class="fallback" />
{:else}
	<!-- 3D container -->
	<div class="canvas" bind:this={container}></div>
{/if}
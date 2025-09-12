<div class="glass-container">
	<div class="circle -bl -alt"></div>
	<div class="circle -tr"></div>
</div>

<style>
	.glass-container {
		position: fixed;
		float: left;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
	}
	.glass-container::after {
		content: '';
		position: absolute;
		bottom: 0;
		display: block;
		width: 100%;
		height: 50%;
		background: linear-gradient(180deg, var(--color-surface-opacity-10) 0%, var(--color-surface-opacity-90) 100%);
		z-index: 10;
	}
	
	.circle {
		position: absolute;
		width: 2400px;
		height: 2400px;
		background: radial-gradient(circle,rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.08) 100%);
		border-radius: 50%;
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		border-top: 2px solid rgba(255, 255, 255, 0.1);
	}
	.circle.-bl {
		bottom: 0;
		left: 0;
		animation-name: slowTranslation;
		animation-direction: both;
		animation-duration: 60s;
		animation-timing-function: var(--transition-timing-function);
        animation-iteration-count: infinite;
	}
	.circle.-tr {
		top: 0;
		right: 0;
		animation-name: slowTranslation;
		animation-direction: reverse;
		animation-duration: 60s;
		animation-timing-function: var(--transition-timing-function);
        animation-iteration-count: infinite;
	}
	
	.circle.-alt {
		background: radial-gradient(circle,rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0.08) 100%);
		border-bottom: 4px solid rgba(255, 255, 255, 0.1);
	}
	
	@keyframes slowTranslation {
		0%{
			transform: rotate(0deg) translate(-80px) rotate(0deg);
		}
		100%{
			transform: rotate(360deg) translate(-80px) rotate(-360deg);
		}
	}
</style>
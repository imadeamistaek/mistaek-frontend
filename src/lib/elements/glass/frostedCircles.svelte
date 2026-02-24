<div class="glass-container">
	<div class="circle -brand -alt"></div>
	<div class="circle -niche"></div>
</div>

<style>
	.glass-container {
		position: absolute;
		float: left;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		z-index: 0;
	}
	
	.circle {
		position: absolute;
		border-radius: 50%;
		filter: blur(64px);
	}
	@-webkit-keyframes noise {
      to { transform: translate3d(-7rem,0,0) }
    }

    @keyframes noise {
      0% { transform: translate3d(0,9rem,0) }
      10% { transform: translate3d(-1rem,-4rem,0) }
      20% { transform: translate3d(-8rem,2rem,0) }
      30% { transform: translate3d(9rem,-9rem,0) }
      40% { transform: translate3d(-2rem,7rem,0) }
      50% { transform: translate3d(-9rem,-4rem,0) }
      60% { transform: translate3d(2rem,6rem,0) }
      70% { transform: translate3d(7rem,-8rem,0) }
      80% { transform: translate3d(-9rem,1rem,0) }
      90% { transform: translate3d(6rem,-5rem,0) }
      to { transform: translate3d(-7rem,0,0) }
    }


	.circle.-brand {
		bottom: 50%;
		left: 0;
		width: 3200px;
		height: 3200px;
		background: radial-gradient(var(--color-neutral-100) 50%, var(--color-brand-20) 60%, var(--color-brand-accent) 70%);
		animation-name: slowTranslation;
		animation-direction: both;
		animation-duration: 30s;
		animation-timing-function: var(--transition-timing-function);
		animation-iteration-count: infinite;
	}
	.circle.-niche {
		bottom: 50%;
		left: 40%;
		width: 2000px;
		height: 2000px;
		background: radial-gradient(var(--color-tag-completed) 32%, var(--color-tag-progress) 60%, var(--color-tag-on-progress) 75%);
		animation-name: slowTranslation;
		animation-direction: reverse;
		animation-duration: 60s;
		animation-timing-function: var(--transition-timing-function);
		animation-iteration-count: infinite;
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
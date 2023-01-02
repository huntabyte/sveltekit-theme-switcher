<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
	import { enhance, type SubmitFunction } from '$app/forms';

	const submitUpdateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	};

	const themes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter'
	];
</script>

<div class="bg-base-300 min-h-full">
	<div class="navbar bg-base-100 px-6">
		<div class="flex-1">
			<a href="/" class="font-bold text-xl">SvelteKit Theme Switching</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1 z-50">
				<li>
					<button> Set Theme 🎨 </button>
					<ul class="p-2 bg-base-100 w-full max-h-96 overflow-y-scroll">
						<form method="POST" use:enhance={submitUpdateTheme} class="max-h-96">
							{#each themes as theme}
								<li>
									<button formaction="/?/setTheme&theme={theme}&redirectTo={$page.url.pathname}"
										>{theme}</button
									>
								</li>
							{/each}
						</form>
					</ul>
				</li>
			</ul>
		</div>
	</div>
	<slot />
</div>

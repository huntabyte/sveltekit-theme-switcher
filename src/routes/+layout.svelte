<script lang="ts">
	import '../app.postcss';
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
						<li>
							<button>Dark</button>
							<button>Light</button>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
	<slot />
</div>

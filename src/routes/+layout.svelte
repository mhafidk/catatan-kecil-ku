<script lang="ts">
	import './layout.css';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	let { children } = $props();
</script>

<div class="min-h-screen bg-background text-foreground transition-colors duration-300">
	<nav class="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
		<div class="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
			<div class="flex items-center gap-4">
				<a href="/" class="text-2xl font-bold font-caveat tracking-tight sm:text-3xl">
					Catatan Kecil Ku
				</a>
			</div>
			<div class="flex items-center gap-4">
				<ThemeToggle />
			</div>
		</div>
	</nav>

	<main class="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
		{@render children()}
	</main>

	<footer class="mt-auto border-t border-zinc-200 py-8 dark:border-zinc-800">
		<div class="mx-auto max-w-5xl px-4 text-center text-zinc-500 dark:text-zinc-400">
			<p class="font-caveat text-xl">&copy; {new Date().getFullYear()} Catatan Kecil Ku</p>
		</div>
	</footer>
</div>

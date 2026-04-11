<script lang="ts">
	import { onMount } from 'svelte';
	import { Sun, Moon } from 'lucide-svelte';

	let isDark = $state(false);

	onMount(() => {
		isDark = document.documentElement.classList.contains('dark');
	});

	function toggleTheme() {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'theme'); // User hint: should be 'light' or removed, but 'theme' works as 'not dark'
			localStorage.setItem('theme', 'light');
		}
	}
</script>

<button
	onclick={toggleTheme}
	class="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
	aria-label="Toggle theme"
>
	{#if isDark}
		<Sun class="h-5 w-5 text-zinc-100" />
	{:else}
		<Moon class="h-5 w-5 text-zinc-900" />
	{/if}
</button>

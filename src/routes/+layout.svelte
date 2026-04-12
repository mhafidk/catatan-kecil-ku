<script lang="ts">
	import "./layout.css";
	import ThemeToggle from "$lib/components/ThemeToggle.svelte";
	import { Search } from "lucide-svelte";
	import { searchState } from "$lib/search.svelte";
	import { goto } from "$app/navigation";
	// @ts-ignore
	import { pwaInfo } from "virtual:pwa-info";

	let { children } = $props();
</script>

<svelte:head>
	{@html pwaInfo ? pwaInfo.webManifest.linkTag : ""}
</svelte:head>

<div
	class="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300"
>
	<nav
		class="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80"
	>
		<div
			class="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8"
		>
			<div class="flex items-center gap-4">
				<a
					href="/"
					class="text-2xl font-bold font-caveat tracking-tight sm:text-3xl transition-colors hover:text-lime-600 dark:hover:text-lime-400"
				>
					Catatan Kecil Ku
				</a>
			</div>
			<div class="flex items-center gap-2 sm:gap-4">
				<form
					onsubmit={(e) => {
						e.preventDefault();
						goto("/posts");
					}}
					class="relative flex items-center gap-2 w-full max-w-[180px] sm:max-w-sm"
				>
					<div class="relative w-full">
						<Search
							class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-lime-600 dark:text-lime-400"
						/>
						<input
							type="text"
							placeholder="Cari..."
							bind:value={searchState.query}
							class="w-full rounded border border-zinc-300 bg-white py-1.5 pl-9 pr-4 text-sm focus:border-zinc-500 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900"
						/>
					</div>
					<button
						type="submit"
						aria-label="Cari"
						class="hidden sm:flex items-center justify-center rounded bg-zinc-900 px-2 py-1.5 text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
					>
						<Search class="h-4 w-4" />
					</button>
				</form>

				<div class="hidden sm:block">
					<ThemeToggle />
				</div>
			</div>
		</div>
	</nav>

	<div
		class="w-full border-b border-zinc-200 bg-white/50 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/50"
	>
		<div class="mx-auto max-w-5xl px-4 pt-2 pb-2.5 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-4">
					<a
						href="/"
						class="text-sm font-medium text-lime-600 transition-colors hover:text-zinc-950 dark:text-lime-400 dark:hover:text-zinc-50"
						>Home</a
					>
					<a
						href="/posts?tag=doa"
						class="text-sm font-medium text-lime-600 transition-colors hover:text-zinc-950 dark:text-lime-400 dark:hover:text-zinc-50"
						>Doa</a
					>
					<a
						href="/posts?tag=dzikir"
						class="text-sm font-medium text-lime-600 transition-colors hover:text-zinc-950 dark:text-lime-400 dark:hover:text-zinc-50"
						>Dzikir</a
					>
					<a
						href="/faq"
						class="text-sm font-medium text-lime-600 transition-colors hover:text-zinc-950 dark:text-lime-400 dark:hover:text-zinc-50"
						>FAQ</a
					>
					<a
						href="/about"
						class="text-sm font-medium text-lime-600 transition-colors hover:text-zinc-950 dark:text-lime-400 dark:hover:text-zinc-50"
						>About</a
					>
				</div>

				<div class="sm:hidden">
					<ThemeToggle />
				</div>
			</div>
		</div>
	</div>

	<main
		class="mx-auto flex flex-col flex-1 w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8"
	>
		{@render children()}
	</main>

	<footer class="mt-20 border-t border-zinc-200 py-6 dark:border-zinc-800">
		<div
			class="mx-auto max-w-5xl px-4 text-center text-lime-600 dark:text-lime-400"
		>
			<p class="font-sans text-sm">
				&copy; {new Date().getFullYear()} Catatan Kecil Ku
			</p>
		</div>
	</footer>
</div>

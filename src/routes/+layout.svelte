<script lang="ts">
	import "./layout.css";
	import ThemeToggle from "$lib/components/ThemeToggle.svelte";
	import { Search, Menu, X } from "lucide-svelte";
	import { searchState } from "$lib/search.svelte";
	import { goto } from "$app/navigation";
	// @ts-ignore
	import { pwaInfo } from "virtual:pwa-info";

	let { children } = $props();

	let menuOpen = $state(false);
	let navElement: HTMLElement;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	function handleOutsideClick(e: MouseEvent) {
		const target = e.target as Node;
		if (menuOpen && navElement && !navElement.contains(target) && target.isConnected) {
			closeMenu();
		}
	}

	let lastScrollY = 0;
	let navbarHidden = $state(false);

	function handleScroll() {
		const currentScrollY = window.scrollY;
		if (currentScrollY > lastScrollY && currentScrollY > 64) {
			navbarHidden = true;
			if (menuOpen) closeMenu();
		} else {
			navbarHidden = false;
		}
		lastScrollY = currentScrollY;
	}
</script>

<svelte:window onclick={handleOutsideClick} onscroll={handleScroll} />

<svelte:head>
	{@html pwaInfo ? pwaInfo.webManifest.linkTag : ""}
</svelte:head>

<div
	class="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300"
>
	<nav
		bind:this={navElement}
		class="relative sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80 transition-transform duration-300 {navbarHidden ? '-translate-y-full' : 'translate-y-0'}"
	>
		<div
			class="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8"
		>
			<!-- Left section: logo -->
			<div class="flex items-center">
				<a
					href="/"
					onclick={closeMenu}
					class="text-2xl font-bold font-caveat tracking-tight sm:text-3xl transition-colors hover:text-lime-600 dark:hover:text-lime-400"
				>
					Catatan Kecil Ku
				</a>
			</div>

			<!-- Right section: search + theme toggle (desktop) / burger (mobile) -->
			<div class="flex items-center gap-2">
				<!-- Burger button — only visible on mobile -->
				<button
					id="burger-menu-btn"
					class="sm:hidden flex items-center justify-center rounded p-1.5 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
					aria-label="Toggle menu"
					aria-expanded={menuOpen}
					onclick={toggleMenu}
				>
					{#if menuOpen}
						<X class="h-5 w-5" />
					{:else}
						<Menu class="h-5 w-5" />
					{/if}
				</button>

				<!-- Desktop: search + theme toggle -->
				<div class="hidden sm:flex items-center gap-4">
					<form
						onsubmit={(e) => {
							e.preventDefault();
							goto("/posts");
						}}
						class="relative flex items-center gap-2 w-full max-w-sm"
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
							class="flex items-center justify-center rounded bg-zinc-900 px-2 py-1.5 text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
						>
							<Search class="h-4 w-4" />
						</button>
					</form>

					<!-- Theme toggle — desktop only -->
					<div class="hidden sm:block">
						<ThemeToggle />
					</div>
				</div>
			</div>

			<!-- Mobile dropdown menu -->
			{#if menuOpen}
				<div
					id="mobile-menu"
					class="sm:hidden absolute top-full left-0 w-full border-t border-zinc-200 bg-white/95 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95 shadow-lg"
				>
					<div
						class="mx-auto max-w-5xl px-4 py-3 flex flex-col gap-1"
					>
						<!-- Search bar inside mobile menu -->
						<form
							onsubmit={(e) => {
								e.preventDefault();
								closeMenu();
								goto("/posts");
							}}
							class="relative flex items-center gap-2 mb-2"
						>
							<div class="relative flex-1">
								<Search
									class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-lime-600 dark:text-lime-400"
								/>
								<input
									type="text"
									placeholder="Cari..."
									bind:value={searchState.query}
									class="w-full rounded border border-zinc-300 bg-white py-2 pl-9 pr-4 text-sm focus:border-zinc-500 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900"
								/>
							</div>
							<button
								type="submit"
								aria-label="Cari"
								class="flex items-center justify-center rounded bg-zinc-900 px-3 py-2 text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
							>
								<Search class="h-4 w-4" />
							</button>
						</form>
						<div
							class="border-b border-zinc-100 dark:border-zinc-800 mb-1"
						></div>
						<a
							href="/"
							onclick={closeMenu}
							class="rounded px-3 py-2 text-sm font-medium text-lime-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-lime-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
							>Home</a
						>
						<a
							href="/posts?tag=doa"
							onclick={closeMenu}
							class="rounded px-3 py-2 text-sm font-medium text-lime-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-lime-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
							>Doa</a
						>
						<a
							href="/posts?tag=dzikir"
							onclick={closeMenu}
							class="rounded px-3 py-2 text-sm font-medium text-lime-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-lime-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
							>Dzikir</a
						>
						<a
							href="/#faq"
							onclick={closeMenu}
							class="rounded px-3 py-2 text-sm font-medium text-lime-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-lime-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
							>FAQ</a
						>
						<a
							href="/about"
							onclick={closeMenu}
							class="rounded px-3 py-2 text-sm font-medium text-lime-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-lime-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
							>About</a
						>

						<!-- Theme toggle inside mobile menu -->
						<div
							class="px-3 pt-2 pb-1 border-t border-zinc-100 dark:border-zinc-800 mt-1"
						>
							<ThemeToggle />
						</div>
					</div>
				</div>
			{/if}
		</div>
	</nav>

	<!-- Desktop sub-nav (hidden on mobile) -->
	<div
		class="hidden sm:block w-full border-b border-zinc-200 bg-white/50 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/50"
	>
		<div class="mx-auto max-w-5xl px-4 pt-2 pb-2.5 sm:px-6 lg:px-8">
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
					href="/#faq"
					class="text-sm font-medium text-lime-600 transition-colors hover:text-zinc-950 dark:text-lime-400 dark:hover:text-zinc-50"
					>FAQ</a
				>
				<a
					href="/about"
					class="text-sm font-medium text-lime-600 transition-colors hover:text-zinc-950 dark:text-lime-400 dark:hover:text-zinc-50"
					>About</a
				>
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

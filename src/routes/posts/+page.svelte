<script lang="ts">
	import { searchState } from "$lib/search.svelte";
	import { page } from "$app/stores";
	import { Search } from "lucide-svelte";

	let { data } = $props();

	let tagFilter = $derived($page.url.searchParams.get("tag"));

	let filteredPosts = $derived(
		data.posts.filter((post: any) => {
			const matchesSearch = post.title
				.toLowerCase()
				.includes(searchState.query.toLowerCase());

			const matchesTag = tagFilter ? post.tags.includes(tagFilter) : true;

			return matchesSearch && matchesTag;
		}),
	);
	let pageTitle = $derived(
		tagFilter
			? tagFilter.charAt(0).toUpperCase() + tagFilter.slice(1)
			: "Semua Doa",
	);
</script>

<svelte:head>
	<title>{pageTitle} | Catatan Kecil Ku</title>
</svelte:head>

<div class="flex flex-col gap-8">
	<header class="flex flex-col mb-2 gap-8">
		<h1 class="font-caveat text-3xl font-bold sm:text-4xl text-center">
			{pageTitle}
		</h1>

		<form
			onsubmit={(e) => {
				e.preventDefault();
			}}
			class="relative w-full flex gap-2 mx-auto"
		>
			<input
				type="text"
				bind:value={searchState.query}
				placeholder="Cari..."
				class="w-full rounded border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 transition-colors focus:border-lime-600 focus:outline-none focus:ring-1 focus:ring-lime-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-lime-400 dark:focus:ring-lime-400"
			/>
			<button
				type="submit"
				aria-label="Cari"
				class="flex items-center justify-center rounded bg-zinc-950 text-white px-4 transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
			>
				<Search class="h-5 w-5" />
			</button>
		</form>
	</header>

	<div class="grid gap-6 sm:grid-cols-2">
		{#if filteredPosts.length > 0}
			{#each filteredPosts as post}
				<article
					class="group relative flex flex-col items-start rounded border border-zinc-200 p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:hover:border-zinc-700"
				>
					<h2
						class="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100"
					>
						<a
							class="transition-colors hover:text-lime-600 dark:hover:text-lime-400"
							href="/post/{post.slug}"
						>
							<span
								class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded"
							></span>
							<span class="relative z-10">{post.title}</span>
						</a>
					</h2>
					<div class="relative z-10 mt-4 flex flex-wrap gap-2">
						{#each post.tags as tag}
							<span
								class="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-lime-600 dark:bg-zinc-800 dark:text-lime-400"
							>
								{tag}
							</span>
						{/each}
					</div>
				</article>
			{/each}
		{:else}
			<div class="py-12 text-center sm:col-span-2">
				<p class="text-lime-600 dark:text-lime-400">
					Postingan tidak ditemukan.
				</p>
			</div>
		{/if}
	</div>
</div>

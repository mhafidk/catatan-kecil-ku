<script lang="ts">
	import PostCard from "$lib/components/PostCard.svelte";
	import { searchState } from "$lib/search.svelte";
	import { page } from "$app/stores";
	import { Search } from "lucide-svelte";

	let { data } = $props();

	let tagFilter = $state<string | null>(null);
	
	$effect(() => {
		tagFilter = $page.url.searchParams.get("tag");
	});

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
			: "Doa & Dzikir",
	);

	let allTags = $derived([
		...new Set(data.posts.flatMap((p: any) => p.tags)),
	]);

	const POSTS_PER_PAGE = 10;
	let currentPage = $state(1);

	$effect(() => {
		searchState.query;
		tagFilter;
		currentPage = 1;
	});

	let paginatedPosts = $derived(
		filteredPosts.slice(
			(currentPage - 1) * POSTS_PER_PAGE,
			currentPage * POSTS_PER_PAGE
		)
	);

	let totalPages = $derived(Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
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

		<p class="text-center text-sm mt-4">Atau pilih berdasarkan tag:</p>
		<div class="flex flex-wrap gap-2 justify-center mb-4">
			{#each allTags as tag}
				<a
					href="/posts?tag={tag}"
					class="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-lime-600 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-lime-400 dark:hover:bg-zinc-700"
				>
					{tag}
				</a>
			{/each}
		</div>
	</header>

	<div class="grid gap-6 sm:grid-cols-2">
		{#if paginatedPosts.length > 0}
			{#each paginatedPosts as post}
				<PostCard {post} />
			{/each}
		{:else}
			<div class="py-12 text-center sm:col-span-2">
				<p class="text-lime-600 dark:text-lime-400">
					Postingan tidak ditemukan.
				</p>
			</div>
		{/if}
	</div>

	{#if totalPages > 1}
		<div class="mt-8 flex justify-center gap-2">
			<button
				disabled={currentPage === 1}
				onclick={() => {
					currentPage -= 1;
					window.scrollTo(0, 0);
				}}
				class="rounded border border-zinc-200 px-4 py-2 text-sm transition-colors hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-800"
			>
				Sebelumnya
			</button>

			<div class="flex items-center gap-1 sm:gap-2">
				{#each Array.from({ length: totalPages }, (_, i) => i + 1) as pageNum}
					<button
						onclick={() => {
							currentPage = pageNum;
							window.scrollTo(0, 0);
						}}
						class="rounded px-3 py-2 text-sm transition-colors {currentPage === pageNum
							? 'bg-lime-600 text-white hover:bg-lime-700 dark:bg-lime-600 dark:hover:bg-lime-700'
							: 'hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800'}"
					>
						{pageNum}
					</button>
				{/each}
			</div>

			<button
				disabled={currentPage === totalPages}
				onclick={() => {
					currentPage += 1;
					window.scrollTo(0, 0);
				}}
				class="rounded border border-zinc-200 px-4 py-2 text-sm transition-colors hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-800"
			>
				Selanjutnya
			</button>
		</div>
	{/if}
</div>

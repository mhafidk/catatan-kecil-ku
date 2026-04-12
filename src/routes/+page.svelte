<script lang="ts">
	import { searchState } from "$lib/search.svelte";
	let { data } = $props();

	let selectedTags = $state<string[]>([]);

	let allTags = $derived([
		...new Set(data.posts.flatMap((p: any) => p.tags)),
	]);

	let filteredPosts = $derived(
		data.posts.filter((post: any) => {
			const matchesSearch = post.title
				.toLowerCase()
				.includes(searchState.query.toLowerCase());
			const matchesTags =
				selectedTags.length === 0 ||
				selectedTags.every((tag) => post.tags.includes(tag));
			return matchesSearch && matchesTags;
		}),
	);

	function toggleTag(tag: string) {
		if (selectedTags.includes(tag)) {
			selectedTags = selectedTags.filter((t) => t !== tag);
		} else {
			selectedTags = [...selectedTags, tag];
		}
	}
</script>

<svelte:head>
	<title>Home | Catatan Kecil Ku</title>
</svelte:head>

<div class="flex flex-col gap-8">
	<header class="text-center">
		<h1 class="font-caveat text-3xl font-bold sm:text-4xl">
			Doa Hari Ini!
		</h1>
		<p class="mt-4 text-zinc-700 dark:text-zinc-400">
			Selamat datang di tempat saya berbagi ide.
		</p>
	</header>

	<div class="flex flex-wrap gap-2">
		{#each allTags as tag}
			<button
				onclick={() => toggleTag(tag)}
				class="rounded-full px-3 py-1 text-xs font-medium transition-colors
          {selectedTags.includes(tag)
					? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-900'
					: 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'}"
			>
				{tag}
			</button>
		{/each}
	</div>

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
		{#if filteredPosts.length > 0}
			{#each filteredPosts as post}
				<article
					class="group relative flex flex-col items-start rounded-2xl border border-zinc-200 p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:hover:border-zinc-700"
				>
					<h2
						class="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100"
					>
						<a href="/post/{post.slug}">
							<span
								class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
							></span>
							<span class="relative z-10">{post.title}</span>
						</a>
					</h2>
					<time
						class="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-500 dark:text-zinc-500"
					>
						<span
							class="absolute inset-y-0 left-0 flex items-center"
							aria-hidden="true"
						>
							<span
								class="h-4 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-500"
							></span>
						</span>
						{new Date(post.date).toLocaleDateString("id-ID", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</time>
					<p
						class="relative z-10 mt-2 text-sm text-zinc-700 dark:text-zinc-400"
					>
						{post.description}
					</p>
					<div class="relative z-10 mt-4 flex flex-wrap gap-2">
						{#each post.tags as tag}
							<span
								class="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
							>
								{tag}
							</span>
						{/each}
					</div>
					<div
						aria-hidden="true"
						class="relative z-10 mt-4 flex items-center text-sm font-medium text-zinc-950 dark:text-white"
					>
						Baca selengkapnya
						<svg
							viewBox="0 0 16 16"
							fill="none"
							aria-hidden="true"
							class="ml-1 h-4 w-4 stroke-current"
						>
							<path
								d="M6.75 5.75 9.25 8l-2.5 2.25"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
						</svg>
					</div>
				</article>
			{/each}
		{:else}
			<div class="py-12 text-center">
				<p class="text-zinc-500 dark:text-zinc-400">
					Postingan tidak ditemukan.
				</p>
			</div>
		{/if}
	</div>
</div>

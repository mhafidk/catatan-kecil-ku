<script lang="ts">
	import { searchState } from "$lib/search.svelte";
	import { onMount } from "svelte";

	let { data } = $props();

	let randomPost = $state<any>(null);

	onMount(() => {
		if (data.posts.length > 0) {
			randomPost =
				data.posts[Math.floor(Math.random() * data.posts.length)];
		}
	});

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
	<header class="flex flex-col mb-12">
		<h1 class="font-caveat text-3xl font-bold sm:text-4xl text-center mb-8">
			Doa Hari Ini!
		</h1>
		{#if randomPost}
			<div
				class="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mx-auto w-full"
			>
				<h2
					class="mt-2 text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100 text-center mb-12"
				>
					<a
						href="/post/{randomPost.slug}"
						class="transition-colors hover:text-lime-600 dark:hover:text-lime-400"
					>
						{randomPost.title}
					</a>
				</h2>
				<div
					class="prose prose-zinc prose-black dark:prose-invert prose-headings:font-bold prose-pre:bg-zinc-900 dark:prose-pre:bg-zinc-800 max-w-none text-center"
				>
					{@html randomPost.content}
				</div>
				<div class="mt-6 flex flex-wrap gap-2 justify-center">
					{#each randomPost.tags as tag}
						<span
							class="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-lime-600 dark:bg-zinc-800 dark:text-lime-400"
						>
							{tag}
						</span>
					{/each}
				</div>
			</div>
		{/if}
	</header>

	<div class="flex flex-wrap gap-2">
		{#each allTags as tag}
			<button
				onclick={() => toggleTag(tag)}
				class="rounded-full px-3 py-1 text-xs font-medium transition-colors
          {selectedTags.includes(tag)
					? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-900'
					: 'bg-zinc-100 text-lime-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-lime-400 dark:hover:bg-zinc-700'}"
			>
				{tag}
			</button>
		{/each}
	</div>

	<div class="grid gap-6 sm:grid-cols-2">
		{#if filteredPosts.length > 0}
			{#each filteredPosts as post}
				<article
					class="group relative flex flex-col items-start rounded-2xl border border-zinc-200 p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:hover:border-zinc-700"
				>
					<h2
						class="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100"
					>
						<a
							class="transition-colors hover:text-lime-600 dark:hover:text-lime-400"
							href="/post/{post.slug}"
						>
							<span
								class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
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
			<div class="py-12 text-center">
				<p class="text-lime-600 dark:text-lime-400">
					Postingan tidak ditemukan.
				</p>
			</div>
		{/if}
	</div>
</div>

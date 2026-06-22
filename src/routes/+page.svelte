<script lang="ts">
	import PostCard from "$lib/components/PostCard.svelte";
	import { searchState } from "$lib/search.svelte";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { Search } from "lucide-svelte";
	import type { PageData } from "./$types";
	import type { Post } from "$lib/types";

	let { data }: { data: PageData } = $props();

	let randomPost = $state<Post | null>(null);

	onMount(() => {
		if (data.posts.length > 0) {
			randomPost =
				data.posts[Math.floor(Math.random() * data.posts.length)];
		}
	});

	let filteredPosts = $derived(data.posts.slice(0, 8));

	let allTags = $derived([
		...new Set(data.posts.flatMap((p: any) => p.tags as string[])),
	]);
</script>

<div class="flex flex-col gap-6">
	<header class="flex flex-col mb-12">
		<h1 class="font-caveat text-3xl font-bold sm:text-4xl text-center mb-8">
			Catatan Hari Ini!
		</h1>
		{#if randomPost}
			<div
				class="relative rounded border border-zinc-200 dark:border-zinc-800 mx-auto w-full overflow-hidden"
			>
				<div
					class="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[3px] scale-105"
					style="background-image: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('{randomPost.image || '/mosque.webp'}');"
				></div>
				<div class="relative z-10 px-12 py-10">
					<h2
						class="mt-2 text-xl font-bold tracking-tight text-white text-center mb-12"
					>
						<a
							href="/post/{randomPost.slug}"
							class="transition-colors text-white hover:text-lime-400"
						>
							{randomPost.title}
						</a>
					</h2>
					<div
						class="prose prose-invert prose-headings:font-bold prose-headings:text-white prose-strong:text-white prose-pre:bg-zinc-800/80 max-w-none text-center text-white prose-p:text-white"
					>
						{@html randomPost.content}
					</div>
					<div class="mt-4 flex justify-center">
						<a
							href="/post/{randomPost.slug}"
							class="text-sm font-medium text-lime-400 hover:text-lime-300"
						>
							Selengkapnya &rarr;
						</a>
					</div>
					<div class="mt-6 flex flex-wrap gap-2 justify-center">
						{#each randomPost.tags as tag}
							<span
								class="rounded bg-zinc-950/50 px-3 py-1 text-sm font-medium text-lime-400 backdrop-blur-sm"
							>
								{tag}
							</span>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</header>

	<h2 class="font-caveat text-3xl font-bold sm:text-4xl text-center">
		Mau belajar apa hari ini?
	</h2>

	<form
		onsubmit={(e) => {
			e.preventDefault();
			goto("/posts");
		}}
		class="mb-1 relative w-full flex gap-2 mx-auto"
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

	<div class="grid gap-4 sm:grid-cols-2">
		{#if filteredPosts.length > 0}
			{#each filteredPosts as post}
				<PostCard {post} />
			{/each}
		{:else}
			<div class="py-12 text-center">
				<p class="text-lime-600 dark:text-lime-400">
					Postingan tidak ditemukan.
				</p>
			</div>
		{/if}
	</div>

	<div class="mt-4 flex justify-center">
		<a
			href="/posts"
			onclick={() => searchState.reset()}
			class="rounded bg-zinc-950 px-4 py-2 font-medium text-white text-sm transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
		>
			Lebih banyak lagi
		</a>
	</div>
</div>

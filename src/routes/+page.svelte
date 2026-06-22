<script lang="ts">
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();
</script>

{#if data.post}
	<article class="relative mx-auto max-w-2xl my-auto w-full px-6 py-10 sm:px-12">
		<header class="flex flex-col">
			<h1
				class="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl text-center"
			>
				{data.post.title}
			</h1>
		</header>

		<div
			class="prose prose-invert mt-12 prose-headings:font-bold prose-headings:text-white prose-strong:text-white prose-pre:bg-zinc-800/80 max-w-none text-white prose-p:text-white"
		>
			{@html data.post.content}
		</div>

		<div class="mt-12 flex flex-wrap gap-2 justify-center">
			{#each data.post.tags as tag}
				<a
					href="/posts?tag={tag}"
					class="rounded bg-zinc-950/50 px-3 py-1 text-sm font-medium text-lime-400 transition-colors hover:bg-black backdrop-blur-sm"
				>
					{tag}
				</a>
			{/each}
		</div>

		<div class="mt-16 mb-8 flex justify-center">
			<a
				href="/posts"
				class="rounded bg-white/10 px-8 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/20 backdrop-blur-md border border-white/10 shadow-sm text-center"
			>
				Lihat Catatan Lainnya &rarr;
			</a>
		</div>
	</article>
{:else}
	<div class="py-12 text-center">
		<p class="text-lime-600 dark:text-lime-400">
			Belum ada catatan yang ditambahkan.
		</p>
	</div>
{/if}

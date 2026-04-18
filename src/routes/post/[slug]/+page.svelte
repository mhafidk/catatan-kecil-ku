<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.post.title} | Catatan Kecil Ku</title>
	<meta name="description" content={data.post.description} />
</svelte:head>

<article class="mx-auto max-w-2xl overflow-hidden my-auto w-full">
	<header class="flex flex-col">
		<h1
			class="mt-2 text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-4xl text-center"
		>
			{data.post.title}
		</h1>
		<div class="mt-6 flex flex-wrap gap-2 justify-center">
			{#each data.post.tags as tag}
				<span
					class="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-lime-600 dark:bg-zinc-800 dark:text-lime-400"
				>
					{tag}
				</span>
			{/each}
		</div>
	</header>

	<div
		class="prose prose-zinc prose-black mt-12 dark:prose-invert prose-headings:font-bold prose-pre:bg-zinc-900 dark:prose-pre:bg-zinc-800 max-w-none"
	>
		{@html data.post.content}
	</div>
</article>

<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.post.title} | Catatan Kecil Ku</title>
	<meta name="description" content={data.post.description} />
</svelte:head>

<article class="mx-auto max-w-2xl overflow-hidden">
	<header class="flex flex-col">
		<time
			datetime={data.post.date}
			class="flex items-center text-base text-zinc-500 dark:text-zinc-500"
		>
			<span class="h-4 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-500"></span>
			<span class="ml-3">
				{new Date(data.post.date).toLocaleDateString('id-ID', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</span>
		</time>
		<h1 class="mt-6 text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-5xl">
			{data.post.title}
		</h1>
		<div class="mt-4 flex flex-wrap gap-2">
			{#each data.post.tags as tag}
				<span class="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
					{tag}
				</span>
			{/each}
		</div>
	</header>

	<div class="prose prose-zinc prose-black mt-8 dark:prose-invert prose-headings:font-bold prose-a:text-black dark:prose-a:text-white prose-pre:bg-zinc-900 dark:prose-pre:bg-zinc-800 max-w-none">
		{@html data.post.content}
	</div>
</article>

<div class="mt-12 flex justify-center border-t border-zinc-200 pt-12 dark:border-zinc-800">
	<a
		href="/"
		class="group flex items-center text-sm font-medium text-zinc-950 transition hover:text-zinc-700 dark:text-zinc-200 dark:hover:text-white"
	>
		<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="mr-3 h-4 w-4 stroke-current">
			<path
				d="M9.25 10.25 6.75 8l2.5-2.25"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
		</svg>
		Kembali ke beranda
	</a>
</div>

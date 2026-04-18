<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.post.title} | Catatan Kecil Ku</title>
	<meta name="description" content={data.post.description} />
	<meta property="og:title" content="{data.post.title} | Catatan Kecil Ku" />
	<meta property="og:description" content={data.post.description} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://www.catatankecilku.com/post/{data.post.slug}" />
	<meta property="og:article:published_time" content={data.post.date} />
	{#each data.post.tags as tag}
		<meta property="og:article:tag" content={tag} />
	{/each}

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "BlogPosting",
			"headline": "{data.post.title}",
			"description": "{data.post.description}",
			"datePublished": "{data.post.date}",
			"author": {
				"@type": "Person",
				"name": "Catatan Kecil Ku"
			},
			"publisher": {
				"@type": "Organization",
				"name": "Catatan Kecil Ku",
				"logo": {
					"@type": "ImageObject",
					"url": "https://www.catatankecilku.com/catatan-kecil-ku.webp"
				}
			},
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": "https://www.catatankecilku.com/post/{data.post.slug}"
			}
		}
	</script>
</svelte:head>

<article class="mx-auto max-w-2xl overflow-hidden my-auto w-full">
	<header class="flex flex-col">
		<h1
			class="mt-2 text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-4xl text-center"
		>
			{data.post.title}
		</h1>
	</header>

	<div
		class="prose prose-zinc prose-black mt-12 dark:prose-invert prose-headings:font-bold prose-pre:bg-zinc-900 dark:prose-pre:bg-zinc-800 max-w-none"
	>
		{@html data.post.content}
	</div>

	<div class="mt-12 flex flex-wrap gap-2 justify-center">
		{#each data.post.tags as tag}
			<a
				href="/posts?tag={tag}"
				class="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-lime-600 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-lime-400 dark:hover:bg-zinc-700"
			>
				{tag}
			</a>
		{/each}
	</div>
</article>

<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.post.title} | Catatan Kecil Ku</title>
	<meta name="description" content={data.post.description} />
	<meta property="og:title" content="{data.post.title} | Catatan Kecil Ku" />
	<meta property="og:description" content={data.post.description} />
	<meta property="og:type" content="article" />
	<meta
		property="og:url"
		content="https://www.catatankecilku.com/post/{data.post.slug}"
	/>
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
		<button
			onclick={() => history.back()}
			class="rounded bg-white/10 px-8 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/20 backdrop-blur-md border border-white/10 shadow-sm"
		>
			Kembali
		</button>
	</div>
</article>

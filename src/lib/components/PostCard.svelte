<script lang="ts">
	let { post } = $props();
</script>

<article
	class="group relative flex flex-col items-start rounded border border-zinc-200 p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:hover:border-zinc-700"
>
	<h2
		class="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100"
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
				class="rounded bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-lime-600 dark:bg-zinc-800 dark:text-lime-400"
			>
				{tag}
			</span>
		{/each}
	</div>
</article>

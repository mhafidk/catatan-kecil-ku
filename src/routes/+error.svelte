<script lang="ts">
	import { page } from "$app/state";
</script>

<div class="flex min-h-[50vh] flex-col items-center justify-center text-center">
	<h1 class="font-caveat text-7xl font-bold sm:text-9xl">{page.status}</h1>
	<p class="mt-4 text-xl text-lime-600 dark:text-lime-400">
		{#if page.status === 404}
			Maaf, halaman tidak ditemukan.
		{:else if page.status === 500}
			Ups, terjadi kesalahan pada server kami.
		{:else}
			{page.error?.message || "Terjadi kesalahan."}
		{/if}
	</p>
	<a
		href="/"
		class="mt-8 rounded bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
	>
		Kembali ke beranda
	</a>
</div>

<script lang="ts">
  import PostCard from "$lib/components/PostCard.svelte";
  import { searchState } from "$lib/search.svelte";
  import { page } from "$app/state";
  import { browser } from "$app/environment";
  import { Search, X, ChevronDown } from "lucide-svelte";
  import { slide } from "svelte/transition";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  let tagsExpanded = $state(false);

  // Auto-expand tags if a tag filter is active
  $effect(() => {
    if (tagFilter) {
      tagsExpanded = true;
    }
  });

  let tagFilter = $derived(browser ? page.url.searchParams.get("tag") : null);

  let filteredPosts = $derived(
    data.posts.filter((post: any) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchState.query.toLowerCase());

      const matchesTag = tagFilter ? post.tags.includes(tagFilter) : true;

      return matchesSearch && matchesTag;
    }),
  );

  let pageTitle = $derived(
    tagFilter
      ? tagFilter.charAt(0).toUpperCase() + tagFilter.slice(1)
      : "Catatan Harian",
  );

  let allTags = $derived([
    ...new Set(data.posts.flatMap((p: any) => p.tags as string[])),
  ]);

  const POSTS_PER_PAGE = 10;
  let currentPage = $state(1);

  $effect(() => {
    searchState.query;
    tagFilter;
    currentPage = 1;
  });

  let paginatedPosts = $derived(
    filteredPosts.slice(
      (currentPage - 1) * POSTS_PER_PAGE,
      currentPage * POSTS_PER_PAGE,
    ),
  );

  let totalPages = $derived(Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
</script>

<svelte:head>
  <title>{pageTitle} | Catatan Kecil Ku</title>
</svelte:head>

<div class="flex flex-col gap-6">
  <!-- Hero Header Banner -->
  <header class="flex flex-col items-center text-center gap-1.5 my-2">
    <span
      class="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-400 mb-2"
      >Daftar Catatan</span
    >
    <h1
      class="font-caveat text-4xl sm:text-5xl font-bold text-white tracking-wide"
    >
      {pageTitle}
    </h1>
  </header>

  <!-- Cohesive Search & Filter Controls -->
  <div
    class="rounded-2xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md p-5 flex flex-col gap-5 shadow-lg"
  >
    <!-- Search Form -->
    <form
      onsubmit={(e) => e.preventDefault()}
      class="relative w-full flex gap-2"
    >
      <div class="relative flex-1">
        <Search
          class="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
        />
        <input
          type="text"
          bind:value={searchState.query}
          placeholder="Cari doa, dzikir, atau topik..."
          class="w-full rounded-xl border border-zinc-850 bg-zinc-900/60 py-3 pl-10 pr-10 text-sm text-zinc-100 placeholder-zinc-500 transition-all focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400"
        />
        {#if searchState.query}
          <button
            type="button"
            onclick={() => searchState.reset()}
            class="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 p-0.5 rounded-full hover:bg-zinc-800 transition-colors"
            aria-label="Hapus pencarian"
          >
            <X class="h-4 w-4" />
          </button>
        {/if}
      </div>
    </form>

    <!-- Tag Pills Selection (Collapsable) -->
    <div class="flex flex-col gap-2.5">
      <button
        type="button"
        onclick={() => (tagsExpanded = !tagsExpanded)}
        class="flex items-center justify-between w-full text-left group/btn focus:outline-none cursor-pointer"
      >
        <span class="text-[10px] font-bold text-zinc-500 group-hover/btn:text-zinc-350 uppercase tracking-widest transition-colors flex items-center">
          Kategori Pilihan
          {#if tagFilter}
            <span class="text-[9px] lowercase tracking-normal text-lime-400 ml-2 bg-lime-950/40 px-2 py-0.5 rounded-full border border-lime-500/20">
              #{tagFilter} aktif
            </span>
          {/if}
        </span>
        <ChevronDown
          class="h-4 w-4 text-zinc-500 group-hover/btn:text-zinc-350 transition-transform duration-300 {tagsExpanded ? 'rotate-180' : ''}"
        />
      </button>

      {#if tagsExpanded}
        <div
          transition:slide={{ duration: 200 }}
          class="flex flex-wrap gap-2 pt-1"
        >
          <!-- Clean All Button -->
          <a
            href="/posts"
            class="rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all {!tagFilter
              ? 'bg-lime-400 text-zinc-950 shadow-md shadow-lime-400/20'
              : 'bg-zinc-900/60 border border-zinc-800/60 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'}"
          >
            Semua
          </a>

          <!-- Dynamic tag links -->
          {#each allTags as tag}
            <a
              href="/posts?tag={tag}"
              class="rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all {tagFilter ===
              tag
                ? 'bg-lime-400 text-zinc-950 shadow-md shadow-lime-400/20'
                : 'bg-zinc-900/60 border border-zinc-800/60 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'}"
            >
              {tag}
            </a>
          {/each}
        </div>
      {/if}
    </div>
  </div>

  <!-- Cards list or grid -->
  <div class="grid gap-4 sm:grid-cols-2">
    {#if paginatedPosts.length > 0}
      {#each paginatedPosts as post}
        <PostCard {post} />
      {/each}
    {:else}
      <div
        class="py-12 text-center sm:col-span-2 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/20 backdrop-blur-sm"
      >
        <p class="text-zinc-400 text-sm">
          Tidak ada postingan yang sesuai dengan filter Anda.
        </p>
      </div>
    {/if}
  </div>

  <!-- Pagination Controls -->
  {#if totalPages > 1}
    <div class="mt-4 flex justify-center items-center gap-3">
      <button
        disabled={currentPage === 1}
        onclick={() => {
          currentPage -= 1;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        class="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white disabled:opacity-30 disabled:hover:bg-zinc-900/60 disabled:hover:text-zinc-300 focus:outline-none cursor-pointer"
      >
        Sebelumnya
      </button>

      <div class="flex items-center gap-1.5">
        {#each Array.from({ length: totalPages }, (_, i) => i + 1) as pageNum}
          <button
            onclick={() => {
              currentPage = pageNum;
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            class="rounded-lg w-8.5 h-8.5 text-xs font-semibold transition-all cursor-pointer {currentPage ===
            pageNum
              ? 'bg-lime-400 text-zinc-950 shadow-md shadow-lime-400/10 font-bold'
              : 'text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-100'}"
          >
            {pageNum}
          </button>
        {/each}
      </div>

      <button
        disabled={currentPage === totalPages}
        onclick={() => {
          currentPage += 1;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        class="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white disabled:opacity-30 disabled:hover:bg-zinc-900/60 disabled:hover:text-zinc-300 focus:outline-none cursor-pointer"
      >
        Selanjutnya
      </button>
    </div>
  {/if}
</div>

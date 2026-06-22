<script lang="ts">
  import "./layout.css";
  import { Home, BookOpen, Search, HelpCircle, Info, X } from "lucide-svelte";
  import { fade } from "svelte/transition";
  import { searchState } from "$lib/search.svelte";
  import { activePostState } from "$lib/activePost.svelte";
  import { goto, afterNavigate } from "$app/navigation";
  import { page } from "$app/state";
  import { browser } from "$app/environment";
  // @ts-ignore
  import { pwaInfo } from "virtual:pwa-info";

  import type { Snippet } from "svelte";
  import type { LayoutData } from "./$types";

  let { data, children }: { data: LayoutData; children: Snippet } = $props();

  afterNavigate((navigation) => {
    if (navigation.type !== "popstate" && !navigation.to?.url.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    if (!navigation.to?.url.pathname.startsWith("/posts")) {
      searchState.reset();
    }
    // Update active post on page navigation
    activePostState.post = page.data.post || null;
  });

  let searchOpen = $state(false);

  function isActive(path: string): boolean {
    if (path === "/") {
      return page.url.pathname === "/";
    }
    if (path === "/posts") {
      return (
        page.url.pathname.startsWith("/posts") ||
        page.url.pathname.startsWith("/post/")
      );
    }
    return page.url.pathname.startsWith(path);
  }

  function handleSearchSubmit(e: SubmitEvent) {
    e.preventDefault();
    searchOpen = false;
    if (!page.url.pathname.startsWith("/posts")) {
      goto("/posts");
    }
  }

  function selectQuickTag(tag: string) {
    searchState.query = tag;
    searchOpen = false;
    if (!page.url.pathname.startsWith("/posts")) {
      goto("/posts");
    }
  }

  let currentPost = $derived(activePostState.post || page.data.post);
</script>

<svelte:head>
  {@html pwaInfo ? pwaInfo.webManifest.linkTag : ""}
  <title
    >{currentPost?.title
      ? `${currentPost.title} | Catatan Kecil Ku`
      : page.data.title
        ? `${page.data.title} | Catatan Kecil Ku`
        : "Catatan Kecil Ku - Kumpulan Doa & Dzikir Harian"}</title
  >
  <meta
    name="description"
    content={currentPost?.description ||
      page.data.description ||
      "Kumpulan doa dan dzikir harian untuk umat Islam. Temukan berbagai doa sesuai kebutuhan Anda di Catatan Kecil Ku."}
  />
  <meta
    property="og:title"
    content={currentPost?.title
      ? `${currentPost.title} | Catatan Kecil Ku`
      : page.data.title
        ? `${page.data.title} | Catatan Kecil Ku`
        : "Catatan Kecil Ku - Kumpulan Doa & Dzikir Harian"}
  />
  <meta
    property="og:description"
    content={currentPost?.description ||
      page.data.description ||
      "Kumpulan doa dan dzikir harian untuk umat Islam. Temukan berbagai doa sesuai kebutuhan Anda di Catatan Kecil Ku."}
  />
  <meta property="og:type" content={currentPost ? "article" : "website"} />
  <meta property="og:site_name" content="Catatan Kecil Ku" />
  <meta
    property="og:url"
    content="https://www.catatankecilku.com{page.url.pathname}"
  />
  <meta
    property="og:image"
    content="https://www.catatankecilku.com/catatan-kecil-ku.webp"
  />
  <meta name="twitter:card" content="summary_large_image" />
  <link
    rel="canonical"
    href="https://www.catatankecilku.com{page.url.pathname}"
  />
</svelte:head>

<div
  class="flex min-h-screen flex-col text-foreground transition-colors duration-300 relative pb-28"
>
  <!-- Tactile Noise Grain Overlay -->
  <div class="fixed inset-0 pointer-events-none z-50 bg-noise opacity-[0.02] sm:opacity-[0.035]"></div>

  <!-- Ambient Light Orbs for depth (only shown when no active post background is active) -->
  {#if !currentPost}
    <div class="fixed top-[-8%] right-[-8%] w-[45vw] h-[45vw] sm:w-[65vh] sm:h-[65vh] rounded-full bg-lime-500/18 blur-[60px] sm:blur-[130px] pointer-events-none z-[-1]"></div>
    <div class="fixed bottom-[-8%] left-[-8%] w-[55vw] h-[55vw] sm:w-[75vh] sm:h-[75vh] rounded-full bg-emerald-500/15 blur-[70px] sm:blur-[150px] pointer-events-none z-[-1]"></div>
  {/if}

  {#if currentPost}
    {#key currentPost.slug}
      <div
        transition:fade={{ duration: 400 }}
        class="fixed top-0 left-0 w-full h-[100vh] z-[-1] bg-cover bg-center bg-no-repeat blur-[3px] scale-105"
        style="background-image: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('{currentPost.image ||
          '/mosque.webp'}');"
      ></div>
    {/key}
  {/if}

  <!-- Main Content Area with top breathing margin -->
  <div class="w-full max-w-2xl mx-auto flex-1 flex flex-col px-4 sm:px-6 pt-12">
    <main class="flex-1 pb-8 flex flex-col w-full">
      {@render children()}
    </main>
  </div>

  <!-- Floating/Sticky Bottom Navbar - Pure Dark Glassmorphism -->
  <div
    class="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md z-40"
  >
    <div
      class="flex items-center justify-between px-6 py-2.5 rounded-2xl border border-zinc-900/80 bg-zinc-950/80 backdrop-blur-xl shadow-lg shadow-black/40"
    >
      <!-- Home Link -->
      <a
        href="/"
        class="flex flex-col items-center gap-1 text-center group py-1 flex-1 transition-colors {isActive(
          '/',
        )
          ? 'text-lime-400'
          : 'text-zinc-500 hover:text-zinc-200'}"
      >
        <div class="h-9 flex items-center justify-center">
          <Home class="h-5 w-5 transition-transform group-hover:scale-110" />
        </div>
        <span class="text-[10px] font-medium tracking-wide">Home</span>
      </a>

      <!-- Catatan Link -->
      <a
        href="/posts"
        class="flex flex-col items-center gap-1 text-center group py-1 flex-1 transition-colors {isActive(
          '/posts',
        )
          ? 'text-lime-400'
          : 'text-zinc-500 hover:text-zinc-200'}"
      >
        <div class="h-9 flex items-center justify-center">
          <BookOpen class="h-5 w-5 transition-transform group-hover:scale-110" />
        </div>
        <span class="text-[10px] font-medium tracking-wide">Catatan</span>
      </a>

      <!-- Search Link (Eye-Catching Center Circle, Balanced Height) -->
      <button
        onclick={() => (searchOpen = true)}
        class="flex flex-col items-center gap-1 text-center group py-1 flex-1 transition-colors focus:outline-none cursor-pointer"
      >
        <div class="h-9 flex items-center justify-center">
          <div
            class="relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 group-hover:scale-105 active:scale-95 bg-lime-400 text-zinc-950 shadow-[0_0_10px_rgba(163,230,53,0.25)] group-hover:bg-lime-300 group-hover:shadow-[0_0_16px_rgba(163,230,53,0.5)] {searchOpen
              ? 'scale-105 shadow-[0_0_16px_rgba(163,230,53,0.6)] bg-lime-300'
              : ''}"
          >
            <!-- Glowing layer -->
            <span class="absolute inset-0 rounded-full bg-lime-400/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></span>
            <Search class="h-4.5 w-4.5 stroke-[2.5]" />
          </div>
        </div>
        <span class="text-[10px] font-medium tracking-wide transition-colors {searchOpen ? 'text-lime-400' : 'text-zinc-500 group-hover:text-lime-400'}">Cari</span>
      </button>

      <!-- FAQ Link -->
      <a
        href="/faq"
        class="flex flex-col items-center gap-1 text-center group py-1 flex-1 transition-colors {isActive(
          '/faq',
        )
          ? 'text-lime-400'
          : 'text-zinc-500 hover:text-zinc-200'}"
      >
        <div class="h-9 flex items-center justify-center">
          <HelpCircle
            class="h-5 w-5 transition-transform group-hover:scale-110"
          />
        </div>
        <span class="text-[10px] font-medium tracking-wide">FAQ</span>
      </a>

      <!-- About Link -->
      <a
        href="/about"
        class="flex flex-col items-center gap-1 text-center group py-1 flex-1 transition-colors {isActive(
          '/about',
        )
          ? 'text-lime-400'
          : 'text-zinc-500 hover:text-zinc-200'}"
      >
        <div class="h-9 flex items-center justify-center">
          <Info class="h-5 w-5 transition-transform group-hover:scale-110" />
        </div>
        <span class="text-[10px] font-medium tracking-wide">About</span>
      </a>
    </div>
  </div>
</div>

<!-- Search Overlay Modal -->
{#if searchOpen}
  <div
    class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
  >
    <!-- Backdrop -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      onclick={() => (searchOpen = false)}
    ></div>

    <!-- Modal Container -->
    <div
      class="relative w-full max-w-md bg-zinc-900 rounded-2xl p-6 shadow-2xl z-10 border border-zinc-800 transition-all flex flex-col gap-4"
    >
      <!-- Header -->
      <div class="flex items-center justify-between">
        <h3 class="font-caveat text-3xl font-bold text-lime-400">
          Cari Catatan
        </h3>
        <button
          onclick={() => (searchOpen = false)}
          class="p-1.5 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-zinc-200 transition-colors"
          aria-label="Tutup pencarian"
        >
          <X class="h-5 w-5" />
        </button>
      </div>

      <!-- Search Input Box -->
      <form onsubmit={handleSearchSubmit} class="flex gap-2">
        <div class="relative flex-1">
          <Search
            class="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
          />
          <input
            type="text"
            placeholder="Cari doa, dzikir, atau topik..."
            bind:value={searchState.query}
            class="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-2.5 pl-10 pr-4 text-sm text-zinc-100 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400"
          />
        </div>
        <button
          type="submit"
          class="rounded-xl bg-lime-600 hover:bg-lime-500 text-white px-4 py-2.5 text-sm font-semibold transition-colors shadow-sm active:scale-95"
        >
          Cari
        </button>
      </form>

      <!-- Quick Suggestions -->
      <div class="mt-2">
        <p
          class="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2"
        >
          Topik Populer
        </p>
        <div class="flex flex-wrap gap-2">
          <button
            onclick={() => selectQuickTag("Doa")}
            class="px-3 py-1.5 text-xs rounded-full bg-zinc-800 text-zinc-400 hover:bg-lime-600 hover:text-white transition-all"
          >
            # Doa
          </button>
          <button
            onclick={() => selectQuickTag("Dzikir")}
            class="px-3 py-1.5 text-xs rounded-full bg-zinc-800 text-zinc-400 hover:bg-lime-600 hover:text-white transition-all"
          >
            # Dzikir
          </button>
          <button
            onclick={() => selectQuickTag("Hujan")}
            class="px-3 py-1.5 text-xs rounded-full bg-zinc-800 text-zinc-400 hover:bg-lime-600 hover:text-white transition-all"
          >
            # Hujan
          </button>
          <button
            onclick={() => selectQuickTag("Tidur")}
            class="px-3 py-1.5 text-xs rounded-full bg-zinc-800 text-zinc-400 hover:bg-lime-600 hover:text-white transition-all"
          >
            # Tidur
          </button>
          <button
            onclick={() => selectQuickTag("Pakaian")}
            class="px-3 py-1.5 text-xs rounded-full bg-zinc-800 text-zinc-400 hover:bg-lime-600 hover:text-white transition-all"
          >
            # Pakaian
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .bg-noise {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }
</style>

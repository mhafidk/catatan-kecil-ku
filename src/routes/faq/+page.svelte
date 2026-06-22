<script lang="ts">
  import Faq from "$lib/components/Faq.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>FAQ | Catatan Kecil Ku</title>
</svelte:head>

<div class="flex flex-col gap-6 grow my-2">
  <!-- Header Banner -->
  <header class="flex flex-col items-center text-center gap-1.5">
    <span
      class="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-400 mb-2"
      >Tanya Jawab</span
    >
    <h1
      class="font-caveat text-4xl sm:text-5xl font-bold text-white tracking-wide"
    >
      Frequently Asked Questions
    </h1>
  </header>

  <div class="w-full" id="faq">
    <Faq />
  </div>
</div>

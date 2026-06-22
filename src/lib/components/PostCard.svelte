<script lang="ts">
  import type { Post } from "$lib/types";
  import { ArrowRight } from "lucide-svelte";

  let { post }: { post: Post } = $props();
</script>

<article
  class="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md p-6 transition-all duration-300 hover:border-lime-500/30 hover:shadow-[0_0_24px_rgba(163,230,53,0.06)] hover:scale-[1.01] active:scale-[0.99] h-full"
>
  <a href="/post/{post.slug}" class="flex flex-col gap-3 flex-1">
    <!-- Click handler cover -->
    <span class="absolute inset-0 z-20 rounded-2xl"></span>
    
    <!-- Title & Navigation indicator -->
    <div class="flex items-start justify-between gap-4">
      <h2 class="text-lg font-bold tracking-tight text-zinc-100 group-hover:text-lime-400 transition-colors duration-300">
        {post.title}
      </h2>
      <div class="p-1.5 rounded-full bg-zinc-900/60 border border-zinc-800/50 text-zinc-400 group-hover:text-lime-400 group-hover:border-lime-500/20 group-hover:bg-lime-950/20 transition-all duration-300 shrink-0">
        <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </div>
    </div>

    <!-- Description -->
    {#if post.description}
      <p class="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
        {post.description}
      </p>
    {/if}
  </a>

  <!-- Tags Footer -->
  <div class="relative z-30 mt-6 flex flex-wrap gap-1.5">
    {#each post.tags as tag}
      <a
        href="/posts?tag={tag}"
        class="rounded-full bg-zinc-900/80 border border-zinc-800/60 px-3 py-1 text-[11px] font-medium text-zinc-400 hover:text-lime-400 hover:border-lime-500/30 transition-all"
      >
        #{tag}
      </a>
    {/each}
  </div>
</article>

<script lang="ts">
    import Faq from "$lib/components/Faq.svelte";
</script>

<div class="flex flex-col gap-8 grow">
    <header class="text-center">
        <h1 class="font-caveat text-3xl font-bold sm:text-4xl">FAQ</h1>
    </header>

    <div class="w-full" id="faq">
        <Faq />
    </div>
</div>

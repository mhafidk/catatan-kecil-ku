<script lang="ts">
  import type { PageData } from "./$types";
  import { Mail } from "lucide-svelte";

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>Tentang | Catatan Kecil Ku</title>
</svelte:head>

<div class="flex flex-col gap-6 grow my-2">
  <!-- Header -->
  <header class="flex flex-col items-center text-center gap-1.5">
    <span
      class="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-400 mb-2"
      >Tentang</span
    >
    <h1
      class="font-caveat text-4xl sm:text-5xl font-bold text-white tracking-wide"
    >
      Catatan Kecil Ku
    </h1>
  </header>

  <!-- Main content card -->
  <div
    class="rounded-2xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md p-6 sm:p-8 flex flex-col gap-6 shadow-lg"
  >
    <!-- Opening Greeting -->
    <div class="text-center py-4 border-b border-zinc-800/60">
      <p class="font-arabic text-2xl text-lime-400 leading-loose tracking-wide">
        السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
      </p>
    </div>

    <!-- Body paragraphs -->
    <div
      class="flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-sans"
    >
      <p>
        Doa dan dzikir harus terus kita panjatkan kepada Allah <span
          class="text-lime-400">عَزَّ وَجَلَّ</span
        >. Namun, sering kali banyak doa pendek maupun dzikir harian penting
        yang belum kita hafal atau terlewatkan.
      </p>
      <p>
        Meskipun kita sering menyimpan doa dan dzikir di buku, aplikasi catatan
        biasa, atau media sosial, terkadang terasa kurang praktis untuk
        membukanya kembali saat dibutuhkan. Oleh karena itu, <strong
          >Catatan Kecil Ku</strong
        > dibuat agar kita dapat mengakses kumpulan doa dan dzikir terpilih kapan
        saja dan di mana saja dengan mudah.
      </p>
      <p>
        Seluruh doa dan dzikir di dalam aplikasi ini bersumber langsung dari
        kitab suci <strong>Al-Qur'an</strong> serta kitab-kitab
        <strong>Hadits Shahih</strong>.
      </p>
    </div>

    <!-- Feedback section -->
    <div
      class="bg-zinc-900/40 rounded-xl border border-zinc-800/50 p-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
    >
      <div class="flex flex-col gap-1">
        <h4 class="text-xs font-bold text-white uppercase tracking-wider">
          Kritik & Saran
        </h4>
        <p class="text-xs text-zinc-400 leading-normal">
          Jika Anda menemukan kesalahan penulisan lafadz, terjemahan, atau
          rujukan, mohon hubungi saya.
        </p>
      </div>
      <a
        href="mailto:mhafidk@gmail.com"
        class="rounded-full bg-lime-400 text-zinc-950 px-4 py-2 text-xs font-bold hover:bg-lime-300 transition-all shadow-md shadow-lime-400/10 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
      >
        <Mail class="h-3.5 w-3.5" />
        mhafidk@gmail.com
      </a>
    </div>

    <!-- Closing signature -->
    <div
      class="text-center py-4 border-t border-zinc-800/60 flex flex-col gap-2 mt-2"
    >
      <p class="text-sm font-semibold text-lime-400 italic">
        Semoga bermanfaat untuk kita semua!
      </p>
      <p class="font-arabic text-xl text-zinc-400 mt-2 leading-relaxed">
        وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
      </p>
    </div>
  </div>
</div>

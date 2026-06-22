<script lang="ts">
  import type { PageData } from "./$types";
  import { Monitor, Smartphone, Apple, ArrowLeft } from "lucide-svelte";

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>Petunjuk Install PWA | Catatan Kecil Ku</title>
</svelte:head>

<div class="max-w-2xl mx-auto pb-8 px-4 w-full flex flex-col gap-6 my-2">
  <!-- Header Banner -->
  <header class="flex flex-col items-center text-center gap-1.5 mb-2">
    <span
      class="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-400 mb-2"
      >Panduan Aplikasi</span
    >
    <h1
      class="font-caveat text-4xl sm:text-5xl font-bold text-white tracking-wide"
    >
      Instalasi PWA
    </h1>
    <p class="text-sm text-zinc-400 mt-1 max-w-sm">
      Gunakan aplikasi ini secara offline layaknya aplikasi native di layar
      utama perangkat Anda.
    </p>
  </header>

  <div class="flex flex-col gap-6">
    <!-- Desktop Section -->
    <section
      class="rounded-2xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md p-6 shadow-md flex flex-col gap-5"
    >
      <h2
        class="text-lg font-bold text-white flex items-center gap-3 border-b border-zinc-800/60 pb-3"
      >
        <div
          class="p-2 bg-lime-950/50 border border-lime-500/20 text-lime-400 rounded-xl"
        >
          <Monitor class="h-5 w-5" />
        </div>
        Instalasi di Komputer (Chrome / Edge)
      </h2>

      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <div
            class="flex-none w-7 h-7 rounded-full bg-lime-950 border border-lime-500/30 text-lime-400 flex items-center justify-center text-xs font-bold mt-0.5"
          >
            1
          </div>
          <p class="text-sm text-zinc-300 leading-relaxed">
            Buka situs ini menggunakan browser <strong class="text-white"
              >Google Chrome</strong
            >
            atau <strong class="text-white">Microsoft Edge</strong>.
          </p>
        </div>
        <div class="flex gap-4">
          <div
            class="flex-none w-7 h-7 rounded-full bg-lime-950 border border-lime-500/30 text-lime-400 flex items-center justify-center text-xs font-bold mt-0.5"
          >
            2
          </div>
          <p class="text-sm text-zinc-300 leading-relaxed">
            Klik ikon <strong class="text-white">Install</strong> (biasanya berupa
            ikon layar monitor dengan anak panah ke bawah) yang muncul di sebelah
            kanan kolom alamat URL (Address Bar).
          </p>
        </div>
        <div class="flex gap-4">
          <div
            class="flex-none w-7 h-7 rounded-full bg-lime-950 border border-lime-500/30 text-lime-400 flex items-center justify-center text-xs font-bold mt-0.5"
          >
            3
          </div>
          <p class="text-sm text-zinc-300 leading-relaxed">
            Pilih <strong class="text-white">Install</strong> pada jendela konfirmasi
            yang muncul di browser Anda.
          </p>
        </div>
      </div>
    </section>

    <!-- Android Section -->
    <section
      class="rounded-2xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md p-6 shadow-md flex flex-col gap-5"
    >
      <h2
        class="text-lg font-bold text-white flex items-center gap-3 border-b border-zinc-800/60 pb-3"
      >
        <div
          class="p-2 bg-lime-950/50 border border-lime-500/20 text-lime-400 rounded-xl"
        >
          <Smartphone class="h-5 w-5" />
        </div>
        Instalasi di Android (Chrome)
      </h2>

      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <div
            class="flex-none w-7 h-7 rounded-full bg-lime-950 border border-lime-500/30 text-lime-400 flex items-center justify-center text-xs font-bold mt-0.5"
          >
            1
          </div>
          <p class="text-sm text-zinc-300 leading-relaxed">
            Buka browser <strong class="text-white">Google Chrome</strong> di HP
            Android Anda.
          </p>
        </div>
        <div class="flex gap-4">
          <div
            class="flex-none w-7 h-7 rounded-full bg-lime-950 border border-lime-500/30 text-lime-400 flex items-center justify-center text-xs font-bold mt-0.5"
          >
            2
          </div>
          <p class="text-sm text-zinc-300 leading-relaxed">
            Ketuk ikon <strong class="text-white">tiga titik vertikal</strong> di
            pojok kanan atas layar Chrome.
          </p>
        </div>
        <div class="flex gap-4">
          <div
            class="flex-none w-7 h-7 rounded-full bg-lime-950 border border-lime-500/30 text-lime-400 flex items-center justify-center text-xs font-bold mt-0.5"
          >
            3
          </div>
          <p class="text-sm text-zinc-300 leading-relaxed">
            Pilih menu <strong class="text-white">Instal aplikasi</strong> atau
            <strong class="text-white">Tambahkan ke Layar Utama</strong>.
          </p>
        </div>
        <div class="flex gap-4">
          <div
            class="flex-none w-7 h-7 rounded-full bg-lime-950 border border-lime-500/30 text-lime-400 flex items-center justify-center text-xs font-bold mt-0.5"
          >
            4
          </div>
          <p class="text-sm text-zinc-300 leading-relaxed">
            Ikuti petunjuk konfirmasi di layar Anda untuk menyelesaikan proses
            instalasi.
          </p>
        </div>
      </div>
    </section>

    <!-- iOS Section -->
    <section
      class="rounded-2xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md p-6 shadow-md flex flex-col gap-5"
    >
      <h2
        class="text-lg font-bold text-white flex items-center gap-3 border-b border-zinc-800/60 pb-3"
      >
        <div
          class="p-2 bg-lime-950/50 border border-lime-500/20 text-lime-400 rounded-xl"
        >
          <Apple class="h-5 w-5" />
        </div>
        Instalasi di iOS / iPhone (Safari)
      </h2>

      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <div
            class="flex-none w-7 h-7 rounded-full bg-lime-950 border border-lime-500/30 text-lime-400 flex items-center justify-center text-xs font-bold mt-0.5"
          >
            1
          </div>
          <p class="text-sm text-zinc-300 leading-relaxed">
            Buka browser <strong class="text-white">Safari</strong> di iPhone atau
            iPad Anda.
          </p>
        </div>
        <div class="flex gap-4">
          <div
            class="flex-none w-7 h-7 rounded-full bg-lime-950 border border-lime-500/30 text-lime-400 flex items-center justify-center text-xs font-bold mt-0.5"
          >
            2
          </div>
          <p class="text-sm text-zinc-300 leading-relaxed">
            Ketuk tombol <strong class="text-white">Bagikan (Share)</strong> (ikon
            kotak dengan panah ke atas) di menu bagian bawah layar.
          </p>
        </div>
        <div class="flex gap-4">
          <div
            class="flex-none w-7 h-7 rounded-full bg-lime-950 border border-lime-500/30 text-lime-400 flex items-center justify-center text-xs font-bold mt-0.5"
          >
            3
          </div>
          <p class="text-sm text-zinc-300 leading-relaxed">
            Gulir ke bawah dan ketuk opsi <strong class="text-white"
              >Tambah ke Layar Utama (Add to Home Screen)</strong
            >.
          </p>
        </div>
        <div class="flex gap-4">
          <div
            class="flex-none w-7 h-7 rounded-full bg-lime-950 border border-lime-500/30 text-lime-400 flex items-center justify-center text-xs font-bold mt-0.5"
          >
            4
          </div>
          <p class="text-sm text-zinc-300 leading-relaxed">
            Ketuk <strong class="text-white">Tambah (Add)</strong> di pojok kanan
            atas untuk mengonfirmasi.
          </p>
        </div>
      </div>
    </section>

    <!-- Footer Back Button -->
    <div class="mt-4 flex justify-center">
      <a
        href="/faq"
        class="rounded-xl border border-zinc-800 bg-zinc-900/60 px-6 py-2.5 text-xs font-semibold text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white flex items-center gap-2 cursor-pointer"
      >
        <ArrowLeft class="h-3.5 w-3.5" />
        Kembali ke FAQ
      </a>
    </div>
  </div>
</div>

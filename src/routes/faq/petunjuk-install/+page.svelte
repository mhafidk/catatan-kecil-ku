<script lang="ts">
    import { base } from "$app/paths";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

<div class="max-w-3xl mx-auto pb-8 px-4 w-full">
    <div class="mb-10 text-center">
        <h1
            class="text-4xl font-bold font-caveat text-lime-600 dark:text-lime-400 mb-4"
        >
            Petunjuk Install PWA
        </h1>
        <p class="text-zinc-600 dark:text-zinc-400">
            Gunakan aplikasi ini secara offline layaknya aplikasi asli di
            perangkat Anda.
        </p>
    </div>

    <div class="space-y-12">
        <!-- Desktop Section -->
        <section>
            <h2
                class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2"
            >
                <span class="p-2 bg-lime-100 dark:bg-lime-900/30 rounded-lg"
                    >💻</span
                >
                Instalasi di Komputer (Chrome/Edge)
            </h2>
            <div class="space-y-4">
                <div class="flex items-center gap-4">
                    <div
                        class="flex-none w-8 h-8 bg-lime-500 text-white rounded-full flex items-center justify-center font-bold"
                    >
                        1
                    </div>
                    <p class="text-zinc-700 dark:text-zinc-300">
                        Buka situs ini menggunakan browser <strong
                            >Google Chrome</strong
                        >
                        atau <strong>Microsoft Edge</strong>.
                    </p>
                </div>
                <div class="flex items-center gap-4">
                    <div
                        class="flex-none w-8 h-8 bg-lime-500 text-white rounded-full flex items-center justify-center font-bold"
                    >
                        2
                    </div>
                    <p class="text-zinc-700 dark:text-zinc-300">
                        Klik ikon <strong>Install</strong> (biasanya berupa ikon
                        monitor dengan tanda panah bawah) yang muncul di sebelah
                        kanan kolom alamat (URL bar).
                    </p>
                </div>
                <div class="flex items-center gap-4">
                    <div
                        class="flex-none w-8 h-8 bg-lime-500 text-white rounded-full flex items-center justify-center font-bold"
                    >
                        3
                    </div>
                    <p class="text-zinc-700 dark:text-zinc-300">
                        Pilih <strong>Install</strong> pada jendela konfirmasi yang
                        muncul.
                    </p>
                </div>
            </div>
        </section>

        <!-- Android Section -->
        <section>
            <h2
                class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2"
            >
                <span class="p-2 bg-lime-100 dark:bg-lime-900/30 rounded-lg"
                    >🤖</span
                >
                Instalasi di Android (Chrome)
            </h2>
            <div class="space-y-4">
                <div class="flex items-center gap-4">
                    <div
                        class="flex-none w-8 h-8 bg-lime-500 text-white rounded-full flex items-center justify-center font-bold"
                    >
                        1
                    </div>
                    <p class="text-zinc-700 dark:text-zinc-300">
                        Buka browser <strong>Chrome</strong> di HP Android Anda.
                    </p>
                </div>
                <div class="flex items-center gap-4">
                    <div
                        class="flex-none w-8 h-8 bg-lime-500 text-white rounded-full flex items-center justify-center font-bold"
                    >
                        2
                    </div>
                    <p class="text-zinc-700 dark:text-zinc-300">
                        Ketuk ikon <strong>tiga titik vertikal</strong> di pojok
                        kanan atas.
                    </p>
                </div>
                <div class="flex items-center gap-4">
                    <div
                        class="flex-none w-8 h-8 bg-lime-500 text-white rounded-full flex items-center justify-center font-bold"
                    >
                        3
                    </div>
                    <p class="text-zinc-700 dark:text-zinc-300">
                        Pilih menu <strong>Instal aplikasi</strong> atau
                        <strong>Tambahkan ke Layar utama</strong>.
                    </p>
                </div>
                <div class="flex items-center gap-4">
                    <div
                        class="flex-none w-8 h-8 bg-lime-500 text-white rounded-full flex items-center justify-center font-bold"
                    >
                        4
                    </div>
                    <p class="text-zinc-700 dark:text-zinc-300">
                        Ikuti petunjuk di layar untuk menyelesaikan instalasi.
                    </p>
                </div>
            </div>
        </section>

        <!-- iOS Section -->
        <section>
            <h2
                class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2"
            >
                <span class="p-2 bg-lime-100 dark:bg-lime-900/30 rounded-lg"
                    >🍎</span
                >
                Instalasi di iOS (Safari)
            </h2>
            <div class="space-y-4">
                <div class="flex items-center gap-4">
                    <div
                        class="flex-none w-8 h-8 bg-lime-500 text-white rounded-full flex items-center justify-center font-bold"
                    >
                        1
                    </div>
                    <p class="text-zinc-700 dark:text-zinc-300">
                        Buka browser <strong>Safari</strong> di iPhone atau iPad
                        Anda.
                    </p>
                </div>
                <div class="flex items-center gap-4">
                    <div
                        class="flex-none w-8 h-8 bg-lime-500 text-white rounded-full flex items-center justify-center font-bold"
                    >
                        2
                    </div>
                    <p class="text-zinc-700 dark:text-zinc-300">
                        Ketuk tombol <strong>Bagikan (Share)</strong> (ikon kotak
                        dengan panah ke atas) di bagian bawah layar.
                    </p>
                </div>
                <div class="flex items-center gap-4">
                    <div
                        class="flex-none w-8 h-8 bg-lime-500 text-white rounded-full flex items-center justify-center font-bold"
                    >
                        3
                    </div>
                    <p class="text-zinc-700 dark:text-zinc-300">
                        Gulir ke bawah dan pilih <strong
                            >Tambah ke Layar Utama (Add to Home Screen)</strong
                        >.
                    </p>
                </div>
                <div class="flex items-center gap-4">
                    <div
                        class="flex-none w-8 h-8 bg-lime-500 text-white rounded-full flex items-center justify-center font-bold"
                    >
                        4
                    </div>
                    <p class="text-zinc-700 dark:text-zinc-300">
                        Ketuk <strong>Tambah</strong> di pojok kanan atas.
                    </p>
                </div>
            </div>
        </section>

        <div
            class="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center"
        >
            <a
                href="/"
                class="text-lime-600 dark:text-lime-400 hover:underline font-medium"
            >
                ← Kembali ke beranda
            </a>
        </div>
    </div>
</div>

<script lang="ts">
	const faqs = [
		{
			question: "Apa itu aplikasi Catatan Kecil Ku?",
			answer: "Aplikasi ini adalah kumpulan catatan kecil berisi doa-doa pendek dan dzikir harian. Didesain dengan antarmuka yang minimalist agar mudah dibaca.",
		},
		{
			question: "Kenapa aplikasi Catatan Kecil Ku dibuat?",
			answer: "Karena masalah yang saya alami. Saya sering lupa doa-doa pendek dan dzikir harian. Akhirnya saya membuat aplikasi ini agar mudah dibaca dan diingat.",
		},
		{
			question: "Darimana sumber doa dan dzikirnya?",
			answer: "Semua doa dan dzikir yang terdapat pada aplikasi ini bersumber dari buku, artikel, dan media online lainnya. Kebenaran dan keshahihan isi dan sumber menjadi syarat utama sebelum sebuah doa dan dzikir dipublish di aplikasi ini. Jika terdapat kesalahan pada isi, terjemahan, ataupun rujukan segera laporkan ke <a href='mailto:mhafidk@gmail.com' class='text-lime-600 dark:text-lime-400 hover:underline transition-colors'>mhafidk@gmail.com</a>.",
		},
		{
			question: "Apakah aplikasi ini bisa digunakan secara offline?",
			answer: "Ya, aplikasi ini mendukung fitur PWA (Progressive Web App). Anda dapat menginstalnya di HP atau komputer dan menggunakannya tanpa koneksi internet. Lihat caranya <a href='/faq/petunjuk-install' class='text-lime-600 dark:text-lime-400 hover:underline transition-colors'>disini</a>.",
		},
		{
			question: "Bagaimana cara mencari doa tertentu?",
			answer: "Anda dapat menggunakan kotak pencarian (ikon kaca pembesar) di menu navigasi atas untuk mencari berdasarkan judul doa atau dzikir.",
		},
		{
			question: "Ada saran, masukkan, atau kritik?",
			answer: "Saya sangat terbukan dengan saran, masukkan, dan kritik dari Anda, silakan sampaikan ke <a href='mailto:mhafidk@gmail.com' class='text-lime-600 dark:text-lime-400 hover:underline transition-colors'>mhafidk@gmail.com</a>.",
		},
	];
</script>

<div class="max-w-3xl mx-auto py-8 w-full">
	<div class="mb-10 text-center">
		<h2
			class="text-4xl font-bold font-caveat text-lime-600 dark:text-lime-400 mb-4"
		>
			FAQ
		</h2>
	</div>

	<div class="space-y-4">
		{#each faqs as faq}
			<div
				class="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-lime-500/50 dark:hover:border-lime-500/50"
			>
				<div class="px-6 py-4 text-left">
					<h3
						class="font-medium text-zinc-900 dark:text-zinc-100 text mb-2"
					>
						{faq.question}
					</h3>
					<p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
						{@html faq.answer}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>

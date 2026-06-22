<script lang="ts">
	import { slide } from "svelte/transition";
	import { ChevronDown } from "lucide-svelte";

	const faqs = [
		{
			question: "Apa itu aplikasi Catatan Kecil Ku?",
			answer: "Aplikasi ini adalah kumpulan catatan kecil berisi doa-doa pendek dan dzikir harian. Didesain dengan antarmuka yang minimalis agar mudah dibaca.",
		},
		{
			question: "Kenapa aplikasi Catatan Kecil Ku dibuat?",
			answer: "Karena masalah yang saya alami sendiri. Saya sering kesulitan mengingat doa-doa pendek dan dzikir harian di momen-momen penting. Akhirnya saya membuat website ini agar mudah dibaca, diingat, dan diakses kapan saja.",
		},
		{
			question: "Dari mana sumber doa dan dzikirnya?",
			answer: "Semua doa dan dzikir yang terdapat pada aplikasi ini bersumber dari kitab suci Al-Qur'an dan kitab-kitab Hadits Shahih. Kebenaran dan keshahihan isi serta rujukan menjadi syarat utama sebelum sebuah doa diterbitkan di aplikasi ini. Jika terdapat kesalahan pada isi, terjemahan, ataupun rujukan, segera laporkan ke <a href='mailto:mhafidk@gmail.com' class='text-lime-400 hover:text-lime-300 font-medium transition-colors'>mhafidk@gmail.com</a>.",
		},
		{
			question: "Apakah aplikasi ini bisa digunakan secara offline?",
			answer: "Ya, aplikasi ini mendukung fitur PWA (Progressive Web App). Anda dapat menginstalnya di HP atau komputer layaknya aplikasi bawaan dan menggunakannya tanpa koneksi internet sama sekali. Lihat petunjuk lengkapnya <a href='/faq/petunjuk-install' class='text-lime-400 hover:text-lime-300 font-medium transition-colors'>di sini</a>.",
		},
		{
			question: "Bagaimana cara mencari doa tertentu?",
			answer: "Anda dapat menggunakan tombol <strong>Cari</strong> di menu navigasi bawah (ikon kaca pembesar) untuk membuka pencarian cepat, mengetik kata kunci, atau menyaring doa langsung menggunakan kategori populer yang tersedia.",
		},
		{
			question: "Ada saran, masukan, atau kritik?",
			answer: "Saya sangat terbuka terhadap segala saran, masukan, dan kritik konstruktif untuk mengembangkan Catatan Kecil Ku. Silakan sampaikan pesan Anda melalui email ke <a href='mailto:mhafidk@gmail.com' class='text-lime-400 hover:text-lime-300 font-medium transition-colors'>mhafidk@gmail.com</a>.",
		},
	];

	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer.replace(/<[^>]*>?/gm, ""), // Strip HTML tags for schema
			},
		})),
	};

	let activeIndex = $state<number | null>(null);

	function toggle(index: number) {
		if (activeIndex === index) {
			activeIndex = null;
		} else {
			activeIndex = index;
		}
	}
</script>

<svelte:head>
	<script type="application/ld+json">
		{@html JSON.stringify(faqSchema)}
	</script>
</svelte:head>

<div class="max-w-3xl mx-auto w-full">
	<div class="flex flex-col gap-4">
		{#each faqs as faq, i}
			<div
				class="border border-zinc-800/80 rounded-2xl overflow-hidden bg-zinc-950/40 backdrop-blur-md transition-all duration-300 hover:border-lime-500/30 shadow-md"
			>
				<!-- Question Toggle Button -->
				<button
					type="button"
					onclick={() => toggle(i)}
					class="flex items-center justify-between w-full text-left px-6 py-4.5 group focus:outline-none cursor-pointer"
					aria-expanded={activeIndex === i}
				>
					<h3
						class="font-semibold text-sm sm:text-base text-zinc-100 group-hover:text-lime-400 transition-colors duration-200"
					>
						{faq.question}
					</h3>
					<ChevronDown
						class="h-4.5 w-4.5 text-zinc-500 group-hover:text-zinc-350 transition-transform duration-300 shrink-0 ml-4 {activeIndex === i ? 'rotate-180 text-lime-400' : ''}"
					/>
				</button>

				<!-- Expandable Answer -->
				{#if activeIndex === i}
					<div
						transition:slide={{ duration: 220 }}
						class="px-6 pb-5 pt-1 border-t border-zinc-800/40 text-sm text-zinc-400 leading-relaxed font-sans"
					>
						{@html faq.answer}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

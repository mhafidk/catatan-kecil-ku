<script lang="ts">
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();
</script>

<div class="flex flex-col gap-8 grow">
	<header class="text-center">
		<h1 class="font-caveat text-3xl font-bold sm:text-4xl">About</h1>
	</header>

	<article class="prose prose-zinc mx-auto dark:prose-invert">
		<p>اَلسَلامُ عَلَيْكُم وَرَحْمَةُ اَللهِ وَبَرَكاتُهُ</p>
		<p>
			Doa dan dzikir harus terus kita panjatkan kepada Allah عَزَّ
			وَجَلَّ. Tapi banyak doa dan dzikir yang belum kita ketahui dan
			hafal. Mungkin kita sering mencatat ataupun menyimpan doa dan dzikir
			baik di buku, notes, ataupun social media. Tapi kadang kita lupa
			ataupun sulit untuk membuka catatan kita saat dibutuhkan. Oleh
			karena itu, saya membuat website ini agar kita dapat dengan mudah
			mengakses doa dan dzikir kapanpun dan dimanapun.
		</p>
		<p>
			Doa dan dzikir yang ada di website ini bersumber dari Al-Qur'an dan
			Hadits. Jika terdapat kesalahan dalam penulisan lafadz, terjemahan,
			atau sumbernya, silakan hubungi saya melalui email
			<a
				href="mailto:mhafidk@gmail.com"
				class="text-lime-600 dark:text-lime-400">mhafidk@gmail.com</a
			>.
		</p>
		<p>Semoga bermanfaat!</p>
		<p>وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</p>
	</article>
</div>

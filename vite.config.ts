import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			injectRegister: 'auto',
			devOptions: {
				enabled: true
			},
			manifest: {
				name: 'Catatan Kecil Ku',
				short_name: 'Catatan Kecil Ku',
				description: 'Catatan kecil untuk sehari-hari',
				theme_color: '#ffffff',
				background_color: '#ffffff',
				icons: [
					{
						src: 'pwa-icons/icon-48x48.png',
						sizes: '48x48',
						type: 'image/png'
					},
					{
						src: 'pwa-icons/icon-72x72.png',
						sizes: '72x72',
						type: 'image/png'
					},
					{
						src: 'pwa-icons/icon-96x96.png',
						sizes: '96x96',
						type: 'image/png'
					},
					{
						src: 'pwa-icons/icon-128x128.png',
						sizes: '128x128',
						type: 'image/png'
					},
					{
						src: 'pwa-icons/icon-144x144.png',
						sizes: '144x144',
						type: 'image/png'
					},
					{
						src: 'pwa-icons/icon-152x152.png',
						sizes: '152x152',
						type: 'image/png'
					},
					{
						src: 'pwa-icons/icon-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'pwa-icons/icon-256x256.png',
						sizes: '256x256',
						type: 'image/png'
					},
					{
						src: 'pwa-icons/icon-384x384.png',
						sizes: '384x384',
						type: 'image/png'
					},
					{
						src: 'pwa-icons/icon-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					},
					{
						src: 'pwa-icons/icon-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable'
					}
				],
				display: 'standalone',
				start_url: '/'
			},
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
				runtimeCaching: [
					{
						urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'google-fonts-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
							},
							cacheableResponse: {
								statuses: [0, 200]
							}
						}
					},
					{
						urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'gstatic-fonts-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
							},
							cacheableResponse: {
								statuses: [0, 200]
							}
						}
					}
				]
			}
		})
	]
});

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare module 'virtual:pwa-info' {
	export const pwaInfo: {
		webManifest: {
			linkTag: string;
		};
	} | undefined;
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

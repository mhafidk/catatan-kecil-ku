import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		title: 'FAQ',
		description: 'Pertanyaan yang sering diajukan mengenai aplikasi Catatan Kecil Ku, termasuk cara penggunaan secara offline (PWA).'
	};
};

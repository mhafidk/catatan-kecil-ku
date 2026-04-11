import { getPost } from '$lib/server/posts';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPost(params.slug);

	if (!post) {
		throw error(404, 'Postingan tidak ditemukan');
	}

	return { post };
};

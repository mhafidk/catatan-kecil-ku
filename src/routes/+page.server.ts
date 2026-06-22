import { getPosts } from '$lib/server/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await getPosts();
	const post = posts.length > 0 ? posts[0] : null;
	return { post, posts };
};

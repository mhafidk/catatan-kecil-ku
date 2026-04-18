import * as posts from '$lib/server/posts';

export const prerender = true;

export async function GET() {
	const allPosts = await posts.getPosts();
	const baseUrl = 'https://www.catatankecilku.com'; // Production domain

	const pages = [
		'',
		'/posts',
		'/about',
		...allPosts.map((post) => `/post/${post.slug}`)
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
		.map((page) => {
			return `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.7'}</priority>
  </url>
  `;
		})
		.join('')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}

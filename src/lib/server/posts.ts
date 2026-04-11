import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface Post {
	slug: string;
	title: string;
	date: string;
	description: string;
	tags: string[];
	content: string;
	arabic?: boolean;
}

const CONTENT_DIR = path.resolve('src/content');

export async function getPosts(): Promise<Post[]> {
	const files = fs.readdirSync(CONTENT_DIR);

	const posts = files
		.filter((file) => file.endsWith('.md'))
		.map((file) => {
			const filePath = path.join(CONTENT_DIR, file);
			const fileContent = fs.readFileSync(filePath, 'utf-8');
			const { data, content } = matter(fileContent);

			return {
				slug: file.replace('.md', ''),
				title: data.title,
				date: data.date,
				description: data.description,
				tags: data.tags || [],
				content: marked.parse(content) as string,
				arabic: data.arabic || false
			};
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return posts;
}

export async function getPost(slug: string): Promise<Post | undefined> {
	const posts = await getPosts();
	return posts.find((post) => post.slug === slug);
}

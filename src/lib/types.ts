export interface Post {
	slug: string;
	title: string;
	date: string;
	description: string;
	tags: string[];
	content: string;
	arabic?: boolean;
	image?: string;
}

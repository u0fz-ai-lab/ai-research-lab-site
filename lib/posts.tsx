import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "articles");

export function getSortedPostsData() {
	// Get file names under /posts
	const filenames = fs.readdirSync(postsDir);
	const allPostsData = filenames.map((filename) => {
		// Remove ".md from file to get id"
		const id = filename.replace(/\.md$/, "");

		// Read markdown file as string
		const fullPath = path.join(postsDir, filename);
		const fileContents = fs.readFileSync(fullPath, "utf-8");

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		const blogPost: BlogPost = {
			id,
			title: matterResult.data.title,
			date: matterResult.data.date,
		};

		return blogPost;
	});

	return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
	const fullPath = path.join(postsDir, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf-8");

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);

	const contentHtml = processedContent.toString();

	const blogPostsWithHTML: BlogPost & { contentHtml: string } = {
		id: matterResult.data.id,
		title: matterResult.data.title,
		date: matterResult.data.date,
		contentHtml,
	};

	// Combine the data with the id
	return blogPostsWithHTML;
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

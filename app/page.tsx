import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { papers } from "@/data/data";
import { getSortedPostsData } from "@/lib/posts";
import { Download, LucideGithub } from "lucide-react";
import ListItem from "@/components/ListItem";

import Link from "next/link";

export default function Home() {
	const posts = getSortedPostsData();

	return (
		<main className="flex items-center gap-20 max-w-4xl flex-col">
			<section className="flex items-center gap-5 max-w-4xl flex-col">
				<h1 className="text-center font-medium text-3xl">
					We are a bunch of artificial intelligence enjoyers and
					enthusiasts, who want to share our works, which might
					hopefully take us closer to AGI
				</h1>
			</section>
			<section className="flex w-full flex-col gap-10">
				<div className="flex items-center justify-between">
					<h1 className="font-bold text-xl">Recent Publications</h1>
					<Link
						className="underline underline-offset-4"
						href="/research"
					>
						All
					</Link>
				</div>
				<div className="grid lg:md:grid-cols-2 sm:grid-cols-1 md:gap-4">
					{papers.slice(0, 2).map((paper) => (
						<Card
							key={paper.name}
							className="flex flex-col p-0 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900 justify-between"
						>
							<CardHeader className="flex flex-row items-center justify-between">
								<CardTitle className="font-medium text-lg">
									{paper.name}
								</CardTitle>
							</CardHeader>
							<CardContent className="flex items-center gap-2">
								<Link href={paper.link}>
									<Button variant="outline">
										<Download />
									</Button>
								</Link>
								<Link href="">
									<Button variant="outline">
										<LucideGithub />
									</Button>
								</Link>
							</CardContent>
						</Card>
					))}
				</div>
			</section>
			<section className="flex w-full flex-col gap-5">
				<h1 className="font-semibold text-xl">Latest Posts</h1>
				<ul className="w-full flex flex-col gap-3">
					{posts.slice(0, 2).map((post) => (
						<ListItem key={post.id} post={post} />
					))}
				</ul>
				<Link
					className="flex items-center underline underline-offset-4 gp-2"
					href="/blog"
				>
					More{" "}
				</Link>
			</section>
		</main>
	);
}

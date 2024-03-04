import PaperCard from "@/components/PaperCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { papers } from "@/mock/data";
import { posts } from "@/mock/data";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Download } from "lucide-react";
import { LucideGithub } from "lucide-react";

export default function Home() {
	return (
		<main className="flex items-center gap-20 max-w-4xl flex-col">
			<section className="flex items-center gap-5 max-w-4xl flex-col">
				<h1 className="text-center font-medium text-3xl">
					We are a bunch of artificial intelligence enjoyers and
					enthusiasts, who want to share our works, which might
					hopefully take us closer to AGI
				</h1>
			</section>
			<section className="flex flex-col gap-10">
				<div className="flex items-center justify-between">
					<h1 className="font-bold text-xl">Recent Publications</h1>
					<Link
						className="underline underline-offset-4"
						href="/publications"
					>
						All
					</Link>
				</div>
				<div className="grid lg:md:grid-cols-2 gap-6 sm:grid-cols-1 md:gap-4">
					{papers.slice(0, 2).map((paper) => (
						<Card
							className="flex flex-col p-0 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900 justify-between"
							key={[paper.name]}
						>
							<Link href={paper.link}>
								<CardHeader className="flex flex-row items-center justify-between">
									<CardTitle className="font-medium text-lg">
										{paper.name}
									</CardTitle>
								</CardHeader>
								<CardContent className="flex items-center gap-2">
									<Link href="">
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
							</Link>
						</Card>
					))}
				</div>
			</section>
			<section className="flex flex-col">
				<h1 className="font-semibold text-xl">Latest Posts</h1>
				<div className="flex flex-col gap-12">
					{posts.slice(0, 2).map((post) => (
						<Link
							className="flex flex-col gap-3"
							href="/"
							key={post.title}
						>
							<div>
								<h1 className="text-xl font-semibold">
									{post.title}
								</h1>
								<p className="text-sm text-zinc-400">
									{post.date}
								</p>
							</div>
							<p>{post.summary}</p>
							<div className="bg-zinc-300 my-7 w-full h-[1px]"></div>
						</Link>
					))}
				</div>
				<Link
					className="flex items-center underline underline-offset-4 gp-2"
					href="/"
				>
					More{" "}
				</Link>
			</section>
		</main>
	);
}

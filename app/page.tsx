import PaperCard from "@/components/PaperCard";
import { posts } from "@/data/data";

import Link from "next/link";

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
				<PaperCard />
			</section>
			<section className="flex w-full flex-col">
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

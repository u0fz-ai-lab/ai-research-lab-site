import PaperCard from "@/components/PaperCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { papers } from "@/mock/data";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Cloud, Download } from "lucide-react";

export default function Home() {
	return (
		<main className="flex items-center gap-20 max-w-4xl flex-col">
			<section className="flex items-center gap-5 max-w-4xl flex-col">
				<h1 className="text-center font-medium text-3xl">
					We are a bunch of artificial intelligence enjoyers and
					enthusiasts, who want to share our works, which might
					hopefully take us closer to <strong>AGI</strong>
				</h1>
				<Link href="/">
					<Button>Research</Button>
				</Link>
			</section>
			<section className="flex flex-col gap-7">
				<h1 className="font-medium text-lg">Recent Publications</h1>
				<div className="grid lg:md:grid-cols-2 gap-8 sm:grid-cols-2 md:gap-6 text-xl font-medium">
					{papers.slice(0, 2).map((paper) => (
						<Card
							className="flex flex-col p-0 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900 justify-between"
							key={[paper.name]}
						>
							<Link href={paper.link}>
								<CardHeader className="flex flex-row items-center justify-between">
									<CardTitle className="font-medium text-xl">
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
											<Cloud />
										</Button>
									</Link>
								</CardContent>
							</Link>
						</Card>
					))}
				</div>
			</section>
		</main>
	);
}

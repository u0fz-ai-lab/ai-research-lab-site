import { papers } from "@/data/data";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { LucideGithub } from "lucide-react";
import Link from "next/link";

export default function PaperCard() {
	return (
		<div className="grid lg:md:grid-cols-2 sm:grid-cols-1 md:gap-4">
			{papers.map((paper) => (
				<Card
					key={paper.name}
					className="flex flex-col p-0 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900 justify-between"
				>
					<Link href="/" target="_blank">
						<CardHeader className="flex flex-row items-center justify-between">
							<CardTitle className="font-medium text-lg">
								{paper.name}
							</CardTitle>
						</CardHeader>
						<CardContent className="flex items-center gap-2">
							{/* download papers  */}
							<a href={`/published/${paper.link}`} download>
								<Button variant="outline">
									<Download />
								</Button>
							</a>
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
	);
}

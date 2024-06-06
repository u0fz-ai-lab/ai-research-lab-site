import Link from "next/link";
import { Card } from "./ui/card";

export default function Footer() {
	return (
		<Card className="p-2">
			<div className="flex justify-between items-center">
				<div className="flex items-center font-mono gap-2">
					<Link
						className="underline underline-offset-2"
						target="_blank"
						href="./about"
					>
						About
					</Link>
					<Link
						className="underline underline-offset-2"
						target="_blank"
						href="./team"
					>
						Team
					</Link>
					<Link
						className="underline underline-offset-2"
						target="_blank"
						href="./research"
					>
						Research
					</Link>
					<Link
						className="underline underline-offset-2"
						target="_blank"
						href="https://github.com/u0fz-ai-lab"
					>
						Github
					</Link>
				</div>
				<div>
					<h1>&copy; 2024 AiLab</h1>
				</div>
			</div>
		</Card>
	);
}

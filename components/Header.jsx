import { GithubIcon, Linkedin, Sun } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
	return (
		<nav className="flex w-full items-center font-semibold justify-between">
			<div className="z-40 flex w-full flex-col xl:gap-8 md:gap-4 md:flex-row text-xl">
				<Link
					className="text-2xl font-semibold font-mono md:text-lg"
					href="/"
				>
					aiLab
				</Link>
				<div className="flex gap-2 items-cente font-semibold text-xl">
					<Link href="/publications">research</Link>
					<Link href="/about">about</Link>
					<Link href="/posts">blog</Link>
				</div>
			</div>
			<div className="flex items-center gap-3 justify-between">
				<Link href="/">
					<GithubIcon />
				</Link>
				<Button variant="outline">
					<Sun />
				</Button>
			</div>
		</nav>
	);
};

export default Header;

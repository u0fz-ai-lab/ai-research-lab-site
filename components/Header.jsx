import { GithubIcon } from "lucide-react";
import Link from "next/link";

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
			<Link href="/">
				<GithubIcon />
			</Link>
		</nav>
	);
};

export default Header;

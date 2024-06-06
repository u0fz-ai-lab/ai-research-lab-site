import Link from "next/link";
import { ThemeSwitch } from "./Switch";

const Header = () => {
	return (
		<nav className="flex w-full items-center font-semibold justify-between">
			<div className="z-40 flex w-full flex-col xl:gap-8 md:gap-4 md:flex-row text-xl">
				<Link
					className="text-2xl no-underline font-semibold font-mono md:text-lg"
					href="/"
				>
					aiLab
				</Link>
				<div className="flex gap-2 items-center font-semibold text-xl">
					<Link className="no-underline" href="/research">
						research
					</Link>
					<Link className="no-underline" href="/team">
						team
					</Link>
					<Link className="no-underline" href="/blog">
						blog
					</Link>
					<Link
						className="no-underline"
						href="https://github.com/u0fz-ai-lab"
						target="_blank"
					>
						github
					</Link>
				</div>
			</div>
			<div className="flex items-center gap-2 justify-between">
				<ThemeSwitch />
			</div>
		</nav>
	);
};

export default Header;

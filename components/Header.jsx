import { GithubIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
	return (
		<nav className="flex w-full items-center justify-between">
			<div className="z-40 flex w-full flex-col xl:gap-4 md:flex-row">
				<Link className="text-2xl font-semibold md:text-lg" href="/">
					Research Lab
				</Link>
				<div className="flex gap-2 items-center text-lg">
					<Link href="/">blog</Link>
					<Link href="/">publications</Link>
				</div>
			</div>
			<Link href="/">
				<GithubIcon />
			</Link>
		</nav>
	);
};

export default Header;

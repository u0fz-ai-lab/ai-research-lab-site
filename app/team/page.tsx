import { team } from "@/data/data";
import { Github, Globe, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
	return (
		<main className="flex w-full gap-10 flex-col">
			<h1 className="font-semibold text-xl">Team</h1>
			<section className="grid lg:md:grid-cols-2 sm:grid-cols-1  gap-2">
				{team.map((member) => (
					<div key={member.name} className="border border-zinc-800">
						<Image
							src={member.picture}
							alt={member.name}
							width={100}
							height={100}
						></Image>
						<h2>{member.name}</h2>
						<div className="flex items-center justify-center">
							<Link href={member.linkedin}>
								<Linkedin />
							</Link>
							<Link href={member.github}>
								<Github />
							</Link>
							<Link href={member.site}>
								<Globe />
							</Link>
						</div>
					</div>
				))}
			</section>
		</main>
	);
}

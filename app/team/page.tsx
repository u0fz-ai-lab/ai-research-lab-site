import { team } from "@/data/data";
import { Github, Globe, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  return (
    <main className="flex flex-col w-full gap-10">
      <h1 className="text-xl font-bold">Team</h1>
      <section className="grid gap-2 lg:md:grid-cols-2 sm:grid-cols-1">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center p-4 ">
            <div className="overflow-hidde">
              <Image
                src={member.picture}
                alt={member.name}
                width={200}
                height={200}
                objectFit="cover"
                className="rounded-full"
              ></Image>
            </div>
            <h2 className="mt-2 font-semibold ">{member.name}</h2>
            <div className="flex mt-2 space-x-2">
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

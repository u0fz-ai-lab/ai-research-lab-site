import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props = {
	post: BlogPost;
};

export default function ListItem({ post }: Props) {
	const { id, title, date } = post;
	const formattedDate = getFormattedDate(date);

	return (
		<li className="mt-4 text-2xl">
			<Link href={`/posts/${id}`} className="hover:text-black/70">
				{title}
			</Link>
			<br />
			<p className="text-sm mt-1">{formattedDate}</p>
		</li>
	);
}

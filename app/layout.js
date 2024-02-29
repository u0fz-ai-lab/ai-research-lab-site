import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Research lab",
	description: "Bro",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="mx-auto flex min-h-screen max-w-[760px] flex-col gap-9 px-10 py-5 text-base md:gap-20 md:py-12 ">
				<Header />
				<div className={inter.className}>{children}</div>
			</body>
		</html>
	);
}

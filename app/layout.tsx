import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/lib/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ai Research lab",
	description: "Bro",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="mx-auto prose dark:prose-invert flex min-h-screen max-w-[760px]  flex-col gap-9 px-10 py-5 text-base md:gap-20 md:py-12">
				<ThemeProvider attribute="class" defaultTheme="light">
					<Header />
					<div className={inter.className}>{children}</div>
				</ThemeProvider>
			</body>
		</html>
	);
}

{
	/* <article className="prose lg:prose-xl"></article> */
}

import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Job Hunt | Home",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${epilogue.className} relative overflow-x-hidden`}
			>
				<Header />
				<main>
					<div className="bg-white-background w-full h-screen absolute top-0 -z-10" />
					<div className="absolute w-2/3 h-screen top-0 right-0 -z-10">
						<Image
							src="/images/pattern.png"
							alt="/images/pattern.png"
							fill
						/>
					</div>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}

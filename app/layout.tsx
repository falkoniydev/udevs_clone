import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title:
		"IT-Аутсорсинг Компания Udevs - IT консалтинг, Разработка и внедрение ERP систем",
	description:
		"IT-Аутсорсинг Компания Udevs - Разработка и внедрение ERP систем",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="logo-u.png" />
			</head>
			<body className={inter.className}>
				<main>{children}</main>
			</body>
		</html>
	);
}

import type { Metadata } from "next";
import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from '@/app/StoreProvider';
import Header from '@/components/Layout/Header';

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: [ "latin" ],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: [ "latin" ],
});

export const metadata: Metadata = {
	title: "Emotions",
	description: "Emotions",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en">
		<body className={ `${ geistSans.variable } ${ geistMono.variable } antialiased` }>
		<StoreProvider>
			<Header/>
			{ children }
		</StoreProvider>
		</body>
		</html>
	);
}

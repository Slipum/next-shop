import { Header } from '@/components/shader/header';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
	subsets: ['latin'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Next Shop',
	description: 'This is new shop',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={nunito.className}>
				<main className="min-h-screen">
					<Header />
					{children}
				</main>
			</body>
		</html>
	);
}

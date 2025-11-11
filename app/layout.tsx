import { Nunito_Sans } from 'next/font/google'

import Header from '@/components/Header'
import '@/styles/globals.css'

const nunitoSans = Nunito_Sans({
	subsets: ['latin'],
	display: 'swap',
})

export const metadata = {
	// title: 'Eden Cabins',
	title: {
		template: 'Eden Cabins: %s',
		default: 'Eden Cabins',
	},
	description:
		'Luxurious cabin hotel, located in the heart of the Italian Dolimites, surrounded by beautiful mountains and dark forests',
}

type RootLayoutProps = {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body
				className={`${nunitoSans.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased relative`}
			>
				<Header />
				<div className="flex-1 px-8 py-12">
					<main className="max-w-7xl mx-auto">{children}</main>
				</div>
			</body>
		</html>
	)
}

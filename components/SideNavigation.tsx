import Link from 'next/link'
import { CalendarDays, House, UserRound } from 'lucide-react'
import SignOutButton from '@/components/SignOutButton'

const navLinks = [
	{
		name: 'Home',
		href: '/account',
		icon: <House size={20} className="text-primary-600" />,
	},
	{
		name: 'Reservations',
		href: '/account/reservations',
		icon: <CalendarDays size={20} className="text-primary-600" />,
	},
	{
		name: 'Guest profile',
		href: '/account/profile',
		icon: <UserRound size={20} className="text-primary-600" />,
	},
]

export default function SideNavigation() {
	return (
		<nav className="border-r border-primary-900">
			<ul className="flex flex-col gap-2 h-full text-lg">
				{navLinks.map((link) => (
					<li key={link.name}>
						<Link
							className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200`}
							href={link.href}
						>
							{link.icon}
							<span>{link.name}</span>
						</Link>
					</li>
				))}

				<li className="mt-auto">
					<SignOutButton />
				</li>
			</ul>
		</nav>
	)
}

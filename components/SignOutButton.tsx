import { ArrowRight } from 'lucide-react'

export default function SignOutButton() {
	return (
		<button className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full">
			<ArrowRight size={20} className=" text-primary-600" />
			<span>Sign out</span>
		</button>
	)
}

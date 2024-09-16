import { Image } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ProductCard({
	id,
	href,
	label,
}: {
	id: number
	href?: string
	label: string
}) {
	if (href) {
		return (
			<Link href={href} key={id}>
				<div className='bg-white p-4 rounded shadow flex flex-col items-center'>
					<div className='bg-yellow-400 text-black font-bold p-2 mb-2 rounded size-40 grid place-content-center'>
						<Image className='mx-auto text-slate-400' size={120} />
					</div>
					<p className='text-sm text-black'>{label}</p>
				</div>
			</Link>
		)
	}
	return (
		<div
			key={id}
			className='bg-white p-4 rounded shadow flex flex-col items-center'
		>
			<div className='bg-yellow-400 text-black font-bold p-2 mb-2 rounded size-40 grid place-content-center'>
				<Image className='mx-auto text-slate-400' size={120} />
			</div>
			<p className='text-sm text-black'>{label}</p>
		</div>
	)
}

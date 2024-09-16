import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Bell, Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
	return (
		<div>
			<header className='bg-emerald-900 text-white p-4'>
				<div className='container mx-auto flex items-center justify-between'>
					<Link href={'/'}>
						<Image
							src='/LogoBP.jpg'
							alt='Belanjaparts logo'
							width={150}
							height={40}
							className='text-white hidden sm:block'
						/>
					</Link>
					<div className='flex-grow mx-4'>
						<div className='relative'>
							<Input
								type='text'
								placeholder='Cari Produk'
								className='w-full pl-10 pr-4 py-2 rounded-md text-black bg-white'
							/>
							<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
						</div>
					</div>
					<div className='flex items-center space-x-4'>
						<Button
							variant='ghost'
							className='bg-emerald-800 font-semibold hidden sm:block'
						>
							Aktifkan Lokasi
						</Button>
						<ShoppingCart className='h-6 w-6 ' />
						<Bell className='h-6 w-6 hidden sm:block' />
						<Button className='bg-yellow-400 text-emerald-900 font-semibold hidden sm:block'>
							Login
						</Button>
					</div>
				</div>
			</header>
		</div>
	)
}

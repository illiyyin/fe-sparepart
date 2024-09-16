import { host } from '@/env'
import Link from 'next/link'
import React from 'react'

interface Product {
	id: number
	name: string
}

export default async function Sidebar() {
	const products: Product[] = await fetch(`${host}/api/product`)
		.then((res) => res.json())
		.then((data) => data.data)
	return (
		<div className='bg-gray-100 text-emerald-800 min-h-full'>
			<aside className='sm:w-64 pr-8 pl-4 hidden sm:block'>
				<h2 className='font-bold mb-4 mt-8 border-b border-b-emerald-800 pb-4'>
					Pilih Kategori Barang
				</h2>
				<ul className=''>
					{products.map((product) => (
						<Link href={`/product/${product.id}`} >
							<li key={product.id} className='hover:bg-white font-bold mt-2'>
								{product.name}
							</li>
						</Link>
					))}
				</ul>
			</aside>
		</div>
	)
}

import ProductCard from '@/app/components/ProductCard'
import { host } from '@/env'
import { OctagonX } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Product {
	id: number
	brand_id: number
	name: string
	product_name: string
	brand_name: string
}

const Product = async ({ params }: { params: { productId: string } }) => {
	const products: Product[] = await fetch(
		`${host}/api/product_sku?product_id=${params.productId}`
	)
		.then((res) => res.json())
    .then((data) => data.data)
  console.log(products)

	if (!products.length) {
		return (
      <div className='p-4 w-full flex flex-col items-center'>
        <OctagonX size={64} className='mt-16 mb-4' />
				<p>Belum ada Produk</p>
			</div>
		)
	}
	return (
		<div className='p-4'>
			<h3 className='text-lg font-semibold mb-4 bg-[#2d5d3d] text-white inline-block px-3 py-1 rounded'>
				{products[0]?.product_name}
			</h3>
			<div className='grid grid-cols-2 md:grid-cols-9 gap-4 mt-4 place-content-center'>
				{products.map((product) => (
					<ProductCard
						id={product.id}
						href={`/product/${params.productId}/brand/${product.brand_id}`}
						label={product.brand_name}
					/>
				))}
			</div>
		</div>
	)
}
export default Product

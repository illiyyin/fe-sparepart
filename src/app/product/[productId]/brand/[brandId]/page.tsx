import ProductCard from '@/app/components/ProductCard'
import { host } from '@/env'

interface Product {
	id: number
	name: string
	product_name: string
	brand_name: string
}

const Product = async ({
	params,
}: {
	params: { brandId: string; productId: string }
}) => {
	const products: Product[] = await fetch(
		`${host}/api/product_sku?brand_id=${params.brandId}&product_id=${params.productId}`
	)
		.then((res) => res.json())
		.then((data) => data.data)
	return (
		<div className='p-4'>
			<div>
				<h3 className='text-lg font-semibold mb-4 bg-[#2d5d3d] text-white inline-block px-3 py-1 rounded'>
					{`${products[0]?.product_name} - ${products[0]?.brand_name}`}
				</h3>
				<ul className='grid grid-cols-2 md:grid-cols-9 gap-4 mt-4 place-content-center'>
					{products.map((product) => (
						<li key={product.id}>
							<ProductCard id={product.id} label={product.name} />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
export default Product

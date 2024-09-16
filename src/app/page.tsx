import { Button } from '@/components/ui/button'
import { host } from '@/env'
import ProductCard from './components/ProductCard'

interface Product {
	id: number
	name: string
	product_name: string
	product_id: number
}

interface Brand {
	id: number
	name: string
	product_id: number
}

interface Brands {
	product_id: number
	product_name: string
	brands: Brand[]
}

const mapBrand = (val: Product[]) => {
	const brandMap = new Map<string, Brand[]>()

	for (const product of val) {
		if (!brandMap.has(product.product_name)) {
			brandMap.set(product.product_name, [
				{
					id: product.id,
					name: product.name,
					product_id: product.product_id,
				},
			])
		} else {
			const currentBrands: Brand[] | undefined = brandMap.get(
				product.product_name
			)
			if (!currentBrands) continue
			currentBrands.push({
				id: product.id,
				name: product.name,
				product_id: product.product_id,
			})
			brandMap.set(product.product_name, currentBrands)
		}
	}
	const arr: Brands[] = []
	for (const brand of brandMap) {
		arr.push({
			product_name: brand[0],
			brands: brand[1],
			product_id: brand[1][0].product_id,
		})
	}
	return arr
}

export default async function BelanjapartsHomepage() {
	const products: Brands[] = await fetch(`${host}/api/brand`)
		.then((res) => res.json())
		.then((data) => mapBrand(data.data))

	return (
		<div className='min-h-screen bg-gray-100 p-4'>
			<div className='flex-grow'>
				<div className='bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white'>
					<h2 className='text-2xl font-bold mb-2'>Belanjaparts Paylatter</h2>
					<p className='mb-4'>
						Belanja jadi lebih mudah dengan Tempo hingga 30 hari di aplikasi
						Belanjaparts! Ingin melakukan pengajuan?
					</p>
					<Button variant='secondary'>KLIK DISINI</Button>
				</div>
				<div className='mt-8'>
					{products.map((product) => (
						<div className='mb-8'>
							<h3 className='text-lg font-semibold bg-[#2d5d3d] text-white inline-block px-3 py-1 rounded'>
								{product.product_name}
							</h3>
							<div className='grid grid-cols-2 md:grid-cols-9 gap-4 mt-4 place-content-center'>
								{product.brands.map((brand) => (
									<ProductCard
										id={brand.id}
										href={`/product/${product.product_id}/brand/${brand.id}`}
										label={brand.name}
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

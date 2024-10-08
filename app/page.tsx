'use client';

import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared';
import { Product } from '@prisma/client';
import React from 'react';

export default function Home() {
	const [products, setProducts] = React.useState<Product[]>([]);
	return (
		<>
			<Container className="pt-10">
				<Title text="All products" size="lg" className="font-extrabold" />
			</Container>
			<TopBar />

			<Container className="mt-10 pb-14">
				<div className="flex gap-[80px]">
					<div className="w-[250px]">
						<Filters />
					</div>

					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList
								title="Laptops"
								items={[
									{
										id: 1,
										name: 'MacBook Pro Laptop M3 Pro',
										imageUrl:
											'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290',
										price: 1839.08,
										items: [{ price: 1839.08 }],
									},
									{
										id: 2,
										name: 'MacBook Pro Laptop M3 Pro',
										imageUrl:
											'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290',
										price: 1839.08,
										items: [{ price: 1839.08 }],
									},
									{
										id: 3,
										name: 'MacBook Pro Laptop M3 Pro',
										imageUrl:
											'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290',
										price: 1839.08,
										items: [{ price: 1839.08 }],
									},
									{
										id: 4,
										name: 'MacBook Pro Laptop M3 Pro',
										imageUrl:
											'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290',
										price: 1839.08,
										items: [{ price: 1839.08 }],
									},
								]}
								categoryId={1}
							/>

							<ProductsGroupList
								title="Phones"
								items={[
									{
										id: 1,
										name: 'MacBook Pro Laptop M3 Pro',
										imageUrl:
											'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290',
										price: 1839.08,
										items: [{ price: 1839.08 }],
									},
									{
										id: 2,
										name: 'MacBook Pro Laptop M3 Pro',
										imageUrl:
											'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290',
										price: 1839.08,
										items: [{ price: 1839.08 }],
									},
									{
										id: 3,
										name: 'MacBook Pro Laptop M3 Pro',
										imageUrl:
											'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290',
										price: 1839.08,
										items: [{ price: 1839.08 }],
									},
									{
										id: 4,
										name: 'MacBook Pro Laptop M3 Pro',
										imageUrl:
											'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290',
										price: 1839.08,
										items: [{ price: 1839.08 }],
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}

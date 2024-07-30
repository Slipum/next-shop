import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared';

export default function Home() {
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
										imageUrl: 'https://m.media-amazon.com/images/I/618d5bS2lUL._AC_SL1500_.jpg',
										price: 1839.08,
										items: [{ price: 1839.08 }],
									},
									{
										id: 1,
										name: 'MacBook Pro Laptop M3 Pro',
										imageUrl: 'https://m.media-amazon.com/images/I/618d5bS2lUL._AC_SL1500_.jpg',
										price: 1839.08,
										items: [{ price: 1839.08 }],
									},
									{
										id: 1,
										name: 'MacBook Pro Laptop M3 Pro',
										imageUrl: 'https://m.media-amazon.com/images/I/618d5bS2lUL._AC_SL1500_.jpg',
										price: 1839.08,
										items: [{ price: 1839.08 }],
									},
									{
										id: 1,
										name: 'MacBook Pro Laptop M3 Pro',
										imageUrl: 'https://m.media-amazon.com/images/I/618d5bS2lUL._AC_SL1500_.jpg',
										price: 1839.08,
										items: [{ price: 1839.08 }],
									},
								]}
								categoryId={1}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}

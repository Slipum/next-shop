import { Container, Title, TopBar } from '@/components/shared';

export default function Home() {
	return (
		<>
			<Container className="pt-10">
				<Title text="All products" size="lg" className="font-extrabold" />
			</Container>
			<TopBar />

			<div style={{ height: '1000px' }}></div>
		</>
	);
}

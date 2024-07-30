import { Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui';
import { Title } from './title';

interface Props {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className }) => {
	const formattedPrice = price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

	return (
		<div className={className}>
			<Link href={`/product/${id}`}>
				<div className="flex justify-center p-6 bg-white border border-secondary rounded-lg h-[200px]">
					<img src={imageUrl} alt={name} />
				</div>
				<Title text={name} className="mb-1 mt-3 font-bold" />
				<p className="text-sm text-gray-400">
					Apple 2023 MacBook Pro Laptop M3 Pro chip with 12‑core CPU, 18‑core GPU: 16.2-inch Liquid
					Retina XDR Display, 18GB Unified Memory, 512GB SSD Storage. Works with iPhone/iPad; Space
					Black
				</p>
				<div className="flex justify-between items-center mt-4">
					<span className="text-[20px]">
						from <b>{formattedPrice}</b>
					</span>
					<Button>
						<Plus size={20} className="mr-1" />
						Add
					</Button>
				</div>
			</Link>
		</div>
	);
};

'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';

interface Props {
	className?: string;
}

const categories = [
	{ id: 1, name: 'Laptops' },
	{ id: 2, name: 'Phones' },
	{ id: 3, name: 'Tablets' },
	{ id: 4, name: 'Servers' },
	{ id: 5, name: 'Keyboards' },
];

export const Categories: React.FC<Props> = ({ className }) => {
	const categoryActiveId = useCategoryStore((state) => state.activeId);

	return (
		<div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-xl', className)}>
			{categories.map(({ name, id }, index) => (
				<a
					className={cn(
						'flex items-center font-bold h-11 rounded-xl px-5',
						categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
					)}
					href={`/#${name}`}
					key={index}>
					<button>{name}</button>
				</a>
			))}
		</div>
	);
};

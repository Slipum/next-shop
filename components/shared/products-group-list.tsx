import React from 'react';

interface Props {
	title: string;
	items: any[];
	className?: string;
	listClassName?: string;
	categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	className,
	listClassName,
	categoryId,
}) => {
	return (
		<div className={className}>
			<h1></h1>
		</div>
	);
};

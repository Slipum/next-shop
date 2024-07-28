import React from 'react';
import { FilterCheckbox } from './filter-checkbox';
import { Title } from './title';

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Title text="Filters" size="sm" className="mb-5 font-bold" />
			<div className="flex flex-col gap-4">
				<FilterCheckbox text="anyware" value="1" />
				<FilterCheckbox text="something" value="2" />
			</div>

			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Price</p>
			</div>
		</div>
	);
};

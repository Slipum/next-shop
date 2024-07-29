import React from 'react';
import { Input } from '../ui';
import { FilterCheckbox } from './filter-checkbox';
import { RangeSlider } from './range-slider';
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
				<div className="flex gap-3 mb-5">
					<Input type="number" placeholder="0" min={0} max={2000} defaultValue={0} />
					<Input type="number" min={1} max={2000} placeholder="2000" />
				</div>

				<RangeSlider min={0} max={2000} step={2} value={[0, 2000]} />
			</div>
		</div>
	);
};

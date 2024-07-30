import React from 'react';
import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
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
				<FilterCheckbox text="New" value="1" />
				<FilterCheckbox text="Renewed" value="2" />
				<FilterCheckbox text="Used" value="3" />
			</div>

			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Price</p>
				<div className="flex gap-3 mb-5">
					<Input type="number" placeholder="0" min={0} max={2000} defaultValue={0} />
					<Input type="number" min={1} max={2000} placeholder="2000" />
				</div>

				<RangeSlider min={0} max={2000} step={2} value={[0, 2000]} />
			</div>

			<CheckboxFiltersGroup
				title="Laptop Display Size"
				limit={6}
				defaultItems={[
					{
						text: '17 Inches & Above',
						value: '1',
					},
					{
						text: '16 to 16.9 Inches',
						value: '2',
					},
					{
						text: '15 to 15.9 Inches',
						value: '3',
					},
					{
						text: '14 to 14.9 Inches',
						value: '4',
					},
					{
						text: '13 to 13.9 Inches',
						value: '5',
					},
					{
						text: '12 to 12.9 Inches',
						value: '6',
					},
					{
						text: '11 to 11.9 Inches',
						value: '7',
					},
					{
						text: '11 Inches & Under',
						value: '8',
					},
				]}
				items={[
					{
						text: '17 Inches & Above',
						value: '1',
					},
					{
						text: '16 to 16.9 Inches',
						value: '2',
					},
					{
						text: '15 to 15.9 Inches',
						value: '3',
					},
					{
						text: '14 to 14.9 Inches',
						value: '4',
					},
					{
						text: '13 to 13.9 Inches',
						value: '5',
					},
					{
						text: '12 to 12.9 Inches',
						value: '6',
					},
					{
						text: '11 to 11.9 Inches',
						value: '7',
					},
					{
						text: '11 Inches & Under',
						value: '8',
					},
				]}
			/>
		</div>
	);
};

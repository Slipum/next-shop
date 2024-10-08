import { cn } from '@/lib/utils';
import { ArrowUpDownIcon } from 'lucide-react';
import React from 'react';

interface Props {
	className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-xl cursor-pointer',
				className,
			)}>
			<ArrowUpDownIcon size={16} />
			<b>Sort:</b>
			<b className="text-primary">popularity</b>
		</div>
	);
};

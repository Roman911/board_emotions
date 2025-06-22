'use client';
import { useState } from 'react';
import WrapperContainer from '@/components/WrapperContainer';
import StatisticsList from '@/components/Statistics';
import Dropdown from '@/components/UI/Dropdown';
import { Period } from '@/types/emoji';

const options = [
	{
		value: 'today',
		label: 'Day',
	},
	{
		value: 'week',
		label: 'Week',
	},
	{
		value: 'month',
		label: 'Month',
	},
]

export default function Statistics() {
	const [period, setPeriod] = useState<Period>('month');

	return (
		<WrapperContainer>
			<div className={ 'flex items-center justify-between gap-4'}>
				<h1>Statistics</h1>
				<Dropdown options={ options } onChange={ setPeriod } />
			</div>
			<StatisticsList period={ period } />
		</WrapperContainer>
	);
}

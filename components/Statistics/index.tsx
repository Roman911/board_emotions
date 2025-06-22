'use client';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores';
import NoResult from '@/components/UI/NoResult';
import EmojiIcon from '@/components/Emoji/EmojiIcon';
import type { EmojiIconsAll, Period } from '@/types/emoji';

type EmotionCount = {
	nameEmotion: string;
	value: number;
};

const StatisticsList = observer(({ period }: { period: Period }) => {
	const { emotionsStore } = useStore();
	const [emotions, setEmotions] = useState<EmotionCount[]>([]);

	useEffect(() => {
		emotionsStore.getEmotions();
	}, [ emotionsStore ]);

	useEffect(() => {
		if (emotionsStore.emotions.length) {
			setEmotions(emotionsStore.countEmotions(period));
		}
	}, [emotionsStore.emotions, period]);

	if(!emotions.length) {
		return <NoResult message="We found nothing according to the given parameters."/>
	}

	return (
		<div className="relative overflow-x-auto mt-6">
			<table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" className="px-6 py-3">
						Icon
					</th>
					<th scope="col" className="px-6 py-3">
						Emotion name
					</th>
					<th scope="col" className="px-6 py-3">
						Count
					</th>
				</tr>
				</thead>
				<tbody>
				{ emotions.map((item, index) => {
					return (
						<tr key={ index } className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
							<td className="px-6 py-4">
								<EmojiIcon id={ index.toString() } emoji={ item.nameEmotion as EmojiIconsAll } className='w-12 h-12 mx-auto' />
							</td>
							<th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white uppercase font-semibold">
								{ item.nameEmotion }
							</th>
							<td className="px-6 py-4 text-center text-lg font-semibold">
								{ item.value }
							</td>
						</tr>
					)
				}) }
				</tbody>
			</table>
		</div>
	)
});

export default StatisticsList;

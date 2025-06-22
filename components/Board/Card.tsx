import { FC } from 'react';
import EmojiIcon from '@/components/Emoji/EmojiIcon';
import React from 'react';
import type { IEmoji } from '@/types/emoji';

interface Props {
	emoji: IEmoji;
}

const Card: FC<Props> = ({ emoji }) => {
	const { id, nameEmotion, message } = emoji;

	return (
		<>
			<div>
				<EmojiIcon id={ id } emoji={ nameEmotion } className='w-20 h-20 md:w-32 md:h-32' />
			</div>
			<div className='flex flex-col md:items-center justify-center gap-4 w-full'>
				<h2 className='text-xl font-semibold uppercase'>{ nameEmotion }</h2>
				<p className='md:text-center'>{ message }</p>
			</div>
		</>
	)
};

export default Card;

'use client';
import { FC } from 'react';
import type { IEmoji } from '@/types/emoji';
import EmojiIcon from '@/components/Emoji/EmojiIcon';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface Props {
	emoji: IEmoji;
}

const Card: FC<Props> = ({ emoji }) => {
	const { id, nameEmotion, comment } = emoji;
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id
	});

	const style = { transform: CSS.Transform.toString(transform) };

	return (
		<div
			ref={ setNodeRef }
			{ ...listeners }
			{ ...attributes }
			style={ style }
			className='flex flex-col items-center gap-4 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'
		>
			<h2>{ nameEmotion }</h2>
			<EmojiIcon id={ id } emoji={ nameEmotion } />
			<p>{ comment }</p>
		</div>
	)
};

export default Card;

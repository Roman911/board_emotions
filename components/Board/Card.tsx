import { FC } from 'react';
import * as Emoji from '@/components/Emoji';
import type { IEmoji } from '@/types/emoji';

interface Props {
	emoji: IEmoji
}

const EmojiIcons = {
	haha: Emoji.HahaEmoji,
};

const Card: FC<Props> = ({ emoji }) => {
	const { name, emojiIcon, comment } = emoji;
	const Icon = EmojiIcons[emojiIcon];

	return (
		<div className='flex flex-col items-center gap-4 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'>
			<h2>{ name }</h2>
			<Icon />
			<p>{ comment }</p>
		</div>
	)
};

export default Card;

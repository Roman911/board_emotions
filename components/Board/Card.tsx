import { FC } from 'react';
import type { IEmoji } from '@/types/emoji';
import EmojiIcon from '@/components/Emoji/EmojiIcon';

interface Props {
	emoji: IEmoji
}

const Card: FC<Props> = ({ emoji }) => {
	const { id, name, emojiIcon, comment } = emoji;

	return (
		<div className='flex flex-col items-center gap-4 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'>
			<h2>{ name }</h2>
			<EmojiIcon id={ id } emoji={ emojiIcon } />
			<p>{ comment }</p>
		</div>
	)
};

export default Card;

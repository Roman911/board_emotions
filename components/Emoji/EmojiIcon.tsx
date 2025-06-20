import { FC } from 'react';
import * as Emoji from '@/components/Emoji';
import type { EmojiIconsAll } from '@/types/emoji';
import { twMerge } from 'tailwind-merge';

const EmojiIcons = {
	haha: Emoji.HahaEmoji,
	sad: Emoji.SadEmoji,
	smile: Emoji.SmileEmoji,
};

interface Props {
	id: number;
	emoji: EmojiIconsAll;
	onClick?: (id: number) => void;
	active?: null | number;
}

const EmojiIcon: FC<Props> = ({ id, emoji, active, onClick }) => {
	const Component = EmojiIcons[emoji];
	return <Component
		onClick={ () => onClick && onClick(id) }
		className={ twMerge('cursor-pointer p-2 rounded-full', active === id && 'animate-jump animate-once animate-duration-500 animate-ease-in-out shadow-sm shadow-blue-300') }
	/>;
};

export default EmojiIcon;
'use client';
import { FC } from 'react';
import * as Emoji from '@/components/Emoji';
import type { EmojiIconsAll } from '@/types/emoji';
import { twMerge } from 'tailwind-merge';

const EmojiIcons = {
	angry: Emoji.AngryEmoji,
	haha: Emoji.HahaEmoji,
	sad: Emoji.SadEmoji,
	smile: Emoji.SmileEmoji,
	sleep: Emoji.SleepEmoji,
	neutral: Emoji.NeutralEmoji,
	cry: Emoji.CryEmoji,
	face: Emoji.FaceEmoji,
};

interface Props {
	id: string;
	emoji: EmojiIconsAll;
	onClick?: (id: string) => void;
	active?: null | string;
	isChoice?: boolean;
	className?: string;
}

const EmojiIcon: FC<Props> = ({ id, emoji, active, onClick, isChoice, className='' }) => {
	const Component = EmojiIcons[emoji];

	return <Component
		onClick={ () => onClick && onClick(id) }
		className={
		twMerge(
			className,
			isChoice && 'mx-auto p-1 rounded-full cursor-pointer hover:shadow-sm hover:shadow-blue-300 w-14 h-14',
			isChoice && active === id && 'animate-jump animate-once animate-duration-500 animate-ease-in-out shadow-sm shadow-blue-300',
			className,
		) }
	/>;
};

export default EmojiIcon;
import React, { CSSProperties, forwardRef, HTMLAttributes, TouchEvent, useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import type { IEmoji } from '@/types/emoji';
import { twMerge } from 'tailwind-merge';
import { useStore } from '@/stores';
import { bgColor } from '@/helpers/bgColor';
import Card from '@/components/Board/Card';
import RemoveButton from '@/components/UI/RemoveButton';

export type ItemProps = HTMLAttributes<HTMLDivElement> & {
	emoji: IEmoji;
	withOpacity?: boolean;
	isDragging?: boolean;
};

const SWIPE_THRESHOLD = 100;

const Item = forwardRef<HTMLDivElement, ItemProps>(
	({ emoji, withOpacity, isDragging, style, ...props }, ref) => {
		const { emotionsStore } = useStore();
		const [ offset, setOffset ] = useState(0);
		const [ isMobile, setIsMobile ] = useState(false);
		const touchStartXRef = useRef<number>(0);

		useEffect(() => {
			const checkMobile = () => {
				setIsMobile(window.innerWidth <= 768);
			};

			checkMobile();
			window.addEventListener('resize', checkMobile);
			return () => window.removeEventListener('resize', checkMobile);
		}, []);

		const handleTouchStart = (e: TouchEvent) => {
			touchStartXRef.current = e.touches[0].clientX;
		};

		const handleTouchMove = (e: TouchEvent) => {
			const touchX = e.touches[0].clientX;
			const diff = touchStartXRef.current - touchX;
			setOffset(Math.max(0, diff));
		};

		const handleTouchEnd = () => {
			if(offset > SWIPE_THRESHOLD) {
				emotionsStore.removeEmotion(emoji.id);
			}
			setOffset(0);
		};

		const inlineStyles: CSSProperties = {
			...style,
			...(isMobile && {
				transform: `translateX(-${ offset }px)`,
				transition: offset === 0 ? 'transform 0.3s ease' : 'none',
			}),
		};

		const onMouseDown = (e: React.MouseEvent) => {
			if ((e.target as HTMLElement).closest('button')) {
				e.stopPropagation();
				emotionsStore.removeEmotion(emoji.id);
			}
		};

		const commonProps = {
			ref,
			...props,
			style: isMobile ? inlineStyles : style,
			onTouchStartCapture: isMobile ? handleTouchStart : undefined,
			onTouchMove: isMobile ? handleTouchMove : undefined,
			onTouchEnd: isMobile ? handleTouchEnd : undefined,
			onMouseDownCapture: isMobile ? undefined : onMouseDown,
			className: twMerge(
				`relative p-4 z-10 flex md:flex-col items-center gap-4 rounded-lg bg-gradient-to-br origin-[50%_50%] cursor-grab group`,
				bgColor(emoji.nameEmotion),
				withOpacity && 'opacity-50',
				isDragging && 'cursor-grabbing scale-110 shadow-lg shadow-blue-900',
				props.className // spread className if passed from parent
			)
		};

		return (
			<div
				{ ...commonProps }
			>
				<RemoveButton className='hidden md:group-hover:block' />
				<Card emoji={ emoji } />
			</div>
		)
	}
);

export default observer(Item);

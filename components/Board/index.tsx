'use client';
import { useState } from 'react';
import AddEmotion from '@/components/Board/AddEmotion';
import WrapperContainer from '@/components/WrapperContainer';
import Card from '@/components/Board/Card';
import type { IEmoji } from '@/types/emoji';
import AddEmotionModal from '@/components/Modals/AddEmotionModal';

const emotionList: IEmoji[] = [
	{
		id: 1,
		name: 'happy',
		emojiIcon: 'haha',
		comment: 'happy',
	},
	{
		id: 2,
		name: 'happy',
		emojiIcon: 'haha',
		comment: 'happy',
	},
	{
		id: 3,
		name: 'happy',
		emojiIcon: 'haha',
		comment: 'happy',
	},
	{
		id: 4,
		name: 'happy',
		emojiIcon: 'haha',
		comment: 'happy',
	},
	{
		id: 5,
		name: 'happy',
		emojiIcon: 'haha',
		comment: 'happy',
	}
]

const Board = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<div className='board'>
			<WrapperContainer>
				<div className='grid grid-cols-1 md:grid-cols-6 gap-2'>
					<AddEmotion setIsOpen={ setIsOpenModal } />
					{ emotionList.map(emoji => (
						<Card key={ emoji.id } emoji={ emoji } />
					))}
				</div>
			</WrapperContainer>
			{ isOpenModal && <AddEmotionModal isOpen={ isOpenModal } setIsOpen={ setIsOpenModal } /> }
		</div>
	)
};

export default Board;

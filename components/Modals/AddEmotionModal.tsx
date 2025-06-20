import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import EmojiIcon from '@/components/Emoji/EmojiIcon';
import type { EmojiIconsAll } from '@/types/emoji';
import Button from '@/components/UI/Button';
import CloseButton from '@/components/UI/CloseButton';

interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

const emojiIcons: {id: number, emojiIcon: EmojiIconsAll}[] = [
	{
		id: 1,
		emojiIcon: 'haha'
	},
	{
		id: 2,
		emojiIcon: 'sad'
	},
	{
		id: 3,
		emojiIcon: 'smile'
	}
];

const AddEmotionModal: FC<Props> = ({ isOpen, setIsOpen }) => {
	const [activeEmoji, setActiveEmoji] = useState<null | number>(null);

	const onClick = (id: number) => {
		setActiveEmoji(id);
	}

	const onCloseModal = () => {
		setIsOpen(false);
	}

	return (
		<div id="add-emotion-modal" aria-hidden="true" className={ twMerge('hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/80', isOpen && 'flex') }>
			<div className={ twMerge('relative p-4 w-full max-w-2xl max-h-full', isOpen && 'animate-fade-down animate-once animate-duration-300') }>
				<div className='relative rounded-lg shadow-sm bg-gray-700'>
					<div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600'>
						<h3 className='text-xl font-semibold text-white'>
							Choose an emotion
						</h3>
						<CloseButton title='Close modal' onClick={ onCloseModal } />
					</div>
					<div className='p-4 md:p-5 space-y-4'>
						<div className='grid grid-cols-6'>
							{ emojiIcons.map(item => {
								return <EmojiIcon key={ item.id } id={ item.id } emoji={ item.emojiIcon } onClick={ onClick } active={ activeEmoji }/>
							}) }
						</div>
						<label htmlFor='message' className='block mb-2 text-sm font-medium text-white'>
							Your message
						</label>
						<textarea
							id='message' rows={ 4 }
							className='block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
							placeholder='Write your thoughts here...'
						/>
					</div>
					<div className='flex items-center justify-end p-4 md:p-5 border-t rounded-b border-gray-600 gap-2'>
						<Button title='Decline' color='secondary' />
						<Button title='I accept' />
					</div>
				</div>
			</div>
		</div>
	)
};

export default AddEmotionModal;

'use client';
import { FC, useState } from 'react';
import * as Icons from '@/components/Icons';
import { twMerge } from 'tailwind-merge';

interface Props {
	setIsOpen: (isOpen: boolean) => void;
}

const AddEmotion: FC<Props> = ({ setIsOpen }) => {
	const [animation, setAnimation] = useState(false);

	const onClick = () => {
		setAnimation(true);
		setIsOpen(true);
		setTimeout(() => setAnimation(false), 600);
	}

	return (
		<div className='flex items-center justify-center fixed bottom-4 right-4 z-20 md:static'>
			<button
				onClick={() => onClick()}
				className={ twMerge('p-2 flex items-center gap-4 text-red-700 md:text-gray-200 cursor-pointer transition duration-300 ease-in-out hover:scale-105', animation && 'animate-jump-in animate-once animate-duration-500 animate-ease-in-out') }
			>
					<span className='border-2 p-2 border-red-700 md:border-gray-200 rounded-full'>
						<Icons.PlusIcon height={ 20 } width={ 20 } />
					</span>
				<span className='text-lg font-semibold hidden md:block'>Add emotion</span>
			</button>
		</div>
	)
};

export default AddEmotion;

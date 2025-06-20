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
		<>
			<div className='flex items-center justify-center'>
				<button
					onClick={() => onClick()}
					className={ twMerge('p-4 border-4 border-white rounded-full text-white cursor-pointer transition duration-300 ease-in-out hover:scale-105', animation && 'animate-jump-in animate-once animate-duration-500 animate-ease-in-out') }
				>
					<Icons.PlusIcon height={ 40 } width={ 40 } />
				</button>
			</div>
		</>
	)
};

export default AddEmotion;

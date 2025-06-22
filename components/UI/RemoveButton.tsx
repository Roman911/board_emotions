import { FC } from 'react';
import * as Icons from '@/components/Icons';
import { twMerge } from 'tailwind-merge';

interface Props {
	className?: string;
}

const RemoveButton: FC<Props> = ({ className='' }) => {
	return (
		<button
			className={
				twMerge(
					'absolute top-2 right-2 z-20 flex p-2 cursor-pointer rounded-lg text-gray-200 bg-gray-600 hover:bg-gray-800 transition duration-300 ease-in-out',
					className
				)
			}
		>
			<Icons.TrashIcon height={ 16 } width={ 16 }/>
		</button>
	)
};

export default RemoveButton;

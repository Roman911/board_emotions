import { FC } from 'react';

interface Props {
	title: string;
	onClick: () => void;
}

const CloseButton: FC<Props> = ({ title, onClick }) => {
	return (
		<button
			type='button'
			onClick={ onClick }
			className='text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white'
		>
			<svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
				<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'/>
			</svg>
			<span className='sr-only'>{ title }</span>
		</button>
	)
};

export default CloseButton;

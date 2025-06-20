import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
	title: string;
	color?: 'primary' | 'secondary';
}

const Button: FC<Props> = ({ title, color='primary' }) => {
	const defaultStyle = 'rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:ring-4 focus:z-10 cursor-pointer transition duration-300';
	const primaryStyle = 'text-white focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800';
	const secondaryStyle = 'border focus:outline-none focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700';

	return <button type='button' className={ twMerge(defaultStyle, color === 'primary' && primaryStyle, color === 'secondary' && secondaryStyle) }>
		{ title }
	</button>
};

export default Button;

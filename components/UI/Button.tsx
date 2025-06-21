import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
	title: string;
	onClick?: () => void;
	type?: 'submit' | 'button';
	color?: 'primary' | 'secondary';
}

const Button: FC<Props> = ({ title, onClick, color='primary', type='button' }) => {
	const defaultStyle = 'rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:ring-4 focus:z-10 cursor-pointer transition duration-300';
	const primaryStyle = 'text-white focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800';
	const secondaryStyle = 'border focus:outline-none focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700';

	return <button
		type={ type }
		onClick={ () => onClick && onClick() }
		className={ twMerge(defaultStyle, color === 'primary' && primaryStyle, color === 'secondary' && secondaryStyle) }
	>
		{ title }
	</button>
};

export default Button;

import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import ErrorBlock from '@/components/UI/ErrorBlock';

interface Props {
	id: string;
	placeholder: string;
	removeError: () => void;
	label?: string;
	rows?: number;
	error?: string;
}

const Textarea: FC<Props> = ({ id, placeholder, removeError, label, rows=4, error }) => {
	return (
		<div className='relative pb-6'>
			{ label && <label htmlFor={ id } className='block mb-2 text-sm font-medium text-white'>
				{ label }
			</label> }
			<textarea
				id={ id }
				name={ id }
				rows={ rows }
				onFocus={ removeError }
				className={ twMerge('block p-2.5 mb-0 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500', error && 'border-red-400') }
				placeholder={ placeholder }
			/>
			{ error && <ErrorBlock errorMessage={ error } /> }
		</div>
	)
};

export default Textarea;

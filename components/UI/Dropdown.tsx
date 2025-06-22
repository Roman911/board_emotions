import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Period } from '@/types/emoji';

interface Props {
	options: {
		value: string,
		label: string,
	}[],
	onChange: (value: Period) => void,
}

const Dropdown: FC<Props> = ({ options, onChange }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = (value: string) => {
		onChange(value as Period);
		setIsOpen(false);
	}

	return (
		<div className="relative">
			<button
				id="dropdownDefaultButton"
				data-dropdown-toggle="dropdown"
				onClick={() => setIsOpen(!isOpen)}
				className="text-white bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
				type="button"
			>
				Dropdown button
				<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
				</svg>
			</button>

			<div
				id="dropdown"
				className={ twMerge("absolute top-14 left-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700", isOpen && 'block') }
			>
				<ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
					{ options.map((item, index) => {
						return <li key={ index }>
							<div onClick={ () => handleClick(item.value) } className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
								{ item.label }
							</div>
						</li>
					}) }
				</ul>
			</div>
		</div>
	)
};

export default Dropdown;

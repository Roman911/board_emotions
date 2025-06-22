import { FC, ReactNode } from 'react';

type GridProps = {
	children: ReactNode;
};

const Grid: FC<GridProps> = ({ children }) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4 mt-6'>
			{ children }
		</div>
	);
};

export default Grid;

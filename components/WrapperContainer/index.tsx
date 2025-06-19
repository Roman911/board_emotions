import { ReactNode } from 'react';

const WrapperContainer = ({ children }: { children: ReactNode }) => {
	return (
		<div className='container min-h-[70vh] mx-auto px-4 py-8'>
			{ children }
		</div>
	)
};

export default WrapperContainer;

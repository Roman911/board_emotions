import { ReactNode } from 'react';

const WrapperContainer = ({ children }: { children: ReactNode }) => {
	return (
		<div className='container min-h-[100vh] mx-auto px-8 md:px-4 py-6'>
			{ children }
		</div>
	)
};

export default WrapperContainer;

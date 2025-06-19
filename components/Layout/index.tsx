import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='container min-h-[70vh] mx-auto'>
			{ children }
		</div>
	)
};

export default Layout;

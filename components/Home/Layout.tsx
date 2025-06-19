import { ReactNode } from 'react';
import styles from './index.module.css';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={ styles.morning }>
			{ children }
		</div>
	)
};

export default Layout;

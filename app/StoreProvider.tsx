'use client'
import { ReactNode } from 'react';
import { Provider } from 'mobx-react';
import { stores } from '@/stores';

export default function StoreProvider({ children }: { children: ReactNode }) {
	return (
		<Provider {...stores}>
			{ children }
		</Provider>
	);
};

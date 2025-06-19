import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import { counterStore } from './counterStore';
import { modalStore } from './modalStore';

export const stores = {
	counterStore,
	modalStore
};

export type TRootStore = typeof stores;

export function useStore() {
	const store = useContext(MobXProviderContext) as TRootStore;
	if (!store) {
		throw new Error('Використовуйте useStore лише всередині Provider');
	}
	return store;
}

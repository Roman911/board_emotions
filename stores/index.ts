import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import { counterStore } from './counterStore';
import { modalStore } from './modalStore';
import { emotionsStore } from './emotionsStore';

export const stores = {
	counterStore,
	emotionsStore,
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

import { makeAutoObservable } from 'mobx';

class ModalStore {
	isOpen = false;

	constructor() {
		makeAutoObservable(this);
	}

	openModal() {
		this.isOpen = true;
	}

	closeModal() {
		this.isOpen = false;
	}
}

export const modalStore = new ModalStore();
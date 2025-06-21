import { makeAutoObservable } from 'mobx';
import { IEmoji } from '@/types/emoji';

const name = "EmotionsStore";

class EmotionsStore {
	emotions: IEmoji[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	getEmotions() {
		const storedJson = localStorage.getItem(name);
		if (storedJson) {
			Object.assign(this, JSON.parse(storedJson));
		}
	}

	addEmotion(emotion: IEmoji) {
		this.emotions.push({ ...emotion, date: new Date() });
		localStorage.setItem(name, JSON.stringify(this));
	}
}

export const emotionsStore = new EmotionsStore();
import { makeAutoObservable } from 'mobx';
import { IEmoji, Period } from '@/types/emoji';

const name = "EmotionsStore";

class EmotionsStore {
	emotions: IEmoji[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	getEmotions() {
		const storedJson = localStorage.getItem(name);

		if (storedJson) {
			try {
				const parsed = JSON.parse(storedJson);
				if (Array.isArray(parsed.emotions)) {
					this.emotions = parsed.emotions;
				}
			} catch (e) {
				console.error("Failed to parse emotions store", e);
			}
		}
	}

	countEmotions(period: Period) {
		const countMap = new Map<string, number>();
		const now = new Date();

		const filteredEmotions = this.emotions.filter(({ date }) => {
			if (!date) return false;

			const emotionDate = new Date(date);

			switch (period) {
				case 'today':
					return (
						emotionDate.getDate() === now.getDate() &&
						emotionDate.getMonth() === now.getMonth() &&
						emotionDate.getFullYear() === now.getFullYear()
					);

				case 'week': {
					const startOfWeek = new Date(now);
					startOfWeek.setDate(now.getDate() - now.getDay()); // Sunday
					startOfWeek.setHours(0, 0, 0, 0);

					const endOfWeek = new Date(startOfWeek);
					endOfWeek.setDate(startOfWeek.getDate() + 6);
					endOfWeek.setHours(23, 59, 59, 999);

					return emotionDate >= startOfWeek && emotionDate <= endOfWeek;
				}

				case 'month':
					return (
						emotionDate.getMonth() === now.getMonth() &&
						emotionDate.getFullYear() === now.getFullYear()
					);

				default:
					return false;
			}
		});

		filteredEmotions.forEach(({ nameEmotion }) => {
			countMap.set(nameEmotion, (countMap.get(nameEmotion) || 0) + 1);
		});

		return Array.from(countMap.entries())
			.map(([nameEmotion, value]) => ({ nameEmotion, value }))
			.sort((a, b) => a.nameEmotion.localeCompare(b.nameEmotion));
	}

	save() {
		localStorage.setItem(name, JSON.stringify({ emotions: this.emotions }));
	}

	addEmotion(emotion: IEmoji) {
		this.emotions = [{ ...emotion, date: new Date() }, ...this.emotions];
		this.save();
	}

	setEmotions(emotions: IEmoji[]) {
		this.emotions = emotions;
		this.save();
	}

	removeEmotion(id: string) {
		this.emotions = this.emotions.filter(item => item.id !== id);
		this.save();
	}

	removeAll() {
		this.emotions = [];
		this.save();
	}
}

export const emotionsStore = new EmotionsStore();
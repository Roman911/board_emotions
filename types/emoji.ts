export type EmojiIconsAll = 'angry' | 'cry' | 'haha' | 'sad' | 'smile' | 'sleep' | 'neutral' | 'face';
export type Period = 'today' | 'week' | 'month';

export interface IEmoji {
	id: string;
	nameEmotion: EmojiIconsAll;
	message: string;
	date?: Date;
}

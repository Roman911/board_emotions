export type EmojiIconsAll = 'haha' | 'sad' | 'smile';

export interface IEmoji {
	id: string;
	nameEmotion: EmojiIconsAll;
	comment: string;
	date?: Date;
}

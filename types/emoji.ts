export type EmojiIconsAll = 'haha' | 'sad' | 'smile';

export interface IEmoji {
	id: number;
	name: string;
	emojiIcon: EmojiIconsAll;
	comment: string;
}

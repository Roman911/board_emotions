import type { EmojiIconsAll } from '@/types/emoji';

export const bgColor = (name: EmojiIconsAll) => {
	switch(name) {
		case 'angry':
			return 'from-pink-600 via-red-600 to-red-400';
		case 'cry':
			return 'from-fuchsia-500 via-blue-600 to-purple-400';
		case 'haha':
			return 'from-amber-500 via-orange-400 to-yellow-400';
		case 'sad':
			return 'from-stone-300 via-red-300 to-orange-300';
		case 'smile':
			return 'from-blue-500 via-blue-400 to-blue-300';
		case 'sleep':
			return 'from-cyan-600 via-cyan-700 to-sky-500';
		case 'neutral':
			return 'from-gray-500 via-gray-400 to-gray-300';
		case 'face':
			return 'from-red-500 via-red-400 to-red-300';
		default:
			return 'from-indigo-500 via-purple-500 to-pink-500';
	}
};

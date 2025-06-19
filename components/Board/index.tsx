import AddEmotion from '@/components/Board/AddEmotion';
import WrapperContainer from '@/components/WrapperContainer';
import Card from '@/components/Board/Card';
import type { IEmoji } from '@/types/emoji';

const emotionList: IEmoji[] = [
	{
		id: 1,
		name: 'happy',
		emojiIcon: 'haha',
		comment: 'happy',
	},
	{
		id: 2,
		name: 'happy',
		emojiIcon: 'haha',
		comment: 'happy',
	},
	{
		id: 3,
		name: 'happy',
		emojiIcon: 'haha',
		comment: 'happy',
	},
	{
		id: 4,
		name: 'happy',
		emojiIcon: 'haha',
		comment: 'happy',
	},
	{
		id: 5,
		name: 'happy',
		emojiIcon: 'haha',
		comment: 'happy',
	}
]

const Board = () => {
	return (
		<div className='board'>
			<WrapperContainer>
				<div className='grid grid-cols-1 md:grid-cols-6 gap-2'>
					<AddEmotion />
					{ emotionList.map(emoji => (
						<Card key={ emoji.id } emoji={ emoji } />
					))}
				</div>
			</WrapperContainer>
		</div>
	)
};

export default Board;

import { FC, FormEvent, useState } from 'react';
import { observer } from 'mobx-react';
import { twMerge } from 'tailwind-merge';
import { useStore } from '@/stores';
import EmojiIcon from '@/components/Emoji/EmojiIcon';
import Button from '@/components/UI/Button';
import CloseButton from '@/components/UI/CloseButton';
import ErrorBlock from '@/components/UI/ErrorBlock';
import Textarea from '@/components/UI/Textarea';
import { emojiIconsAll } from '@/etc/variabels';

interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

interface IErrors {
	emotionError?: string;
	messageError?: string;
}

const AddEmotionModal: FC<Props> = observer(({ isOpen, setIsOpen }) => {
	const { emotionsStore } = useStore();
	const [activeEmoji, setActiveEmoji] = useState<null | string>(null);
	const [errors, setErrors] = useState<null | IErrors>(null);
	const [closeModal, setCloseModal] = useState(false);

	const onClick = (id: string) => {
		setActiveEmoji(id);
		setErrors(errors?.messageError ? { messageError: errors.messageError } : null);
	}

	const onCloseModal = () => {
		setCloseModal(true);
		setTimeout(() => {
			setIsOpen(false);
		}, 200);
	}

	const removeErrorMessage = () => {
		setErrors(errors?.emotionError ? { emotionError: errors.emotionError } : null);
	}

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const message = formData.get('message') as string;
		const found = emojiIconsAll.find(i => i.id === activeEmoji);

		if(!found) {
			setErrors(prevState => ({
				...prevState,
				emotionError: 'Choose an emotion',
			}));
		}

		if(message.length < 6) {
			setErrors(prevState => ({
				...prevState, messageError: 'This field is required.'
			}));
		}

		if (activeEmoji && found && !errors) {
			emotionsStore.addEmotion({
				id: `${new Date().getTime()}`,
				nameEmotion: found.emotionName,
				comment: 'haha',
			});
			onCloseModal();
		}
	}

	return (
		<div id="add-emotion-modal" aria-hidden="true" className={ twMerge('hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/80', isOpen && 'flex') }>
			<div className={ twMerge('relative p-4 w-full max-w-2xl max-h-full', isOpen && 'animate-fade-down animate-once animate-duration-300', closeModal && 'animate-jump-out animate-once animate-duration-300') }>
				<form onSubmit={ onSubmit }>
				<div className='relative rounded-lg shadow-sm bg-gray-700'>
					<div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600'>
						<h3 className='text-xl font-semibold text-white'>
							Choose an emotion
						</h3>
						<CloseButton title='Close modal' onClick={ onCloseModal } />
					</div>
					<div className='p-4 md:p-5 space-y-4'>
						<div className='relative pb-6 mb-2'>
							<div className='grid grid-cols-6'>
								{ emojiIconsAll.map(item => {
									return <EmojiIcon key={ item.id } id={ item.id } emoji={ item.emotionName } onClick={ onClick } active={ activeEmoji }/>
								}) }
							</div>
							{ errors && errors.emotionError && <ErrorBlock errorMessage={ errors.emotionError } /> }
						</div>
						<Textarea id='message' placeholder='Write your thoughts here...' label='Your message' error={ errors?.messageError } removeError={ removeErrorMessage } />
					</div>
					<div className='flex items-center justify-end p-4 md:p-5 border-t rounded-b border-gray-600 gap-2'>
						<Button title='Decline' color='secondary' onClick={ onCloseModal } />
						<Button type='submit' title='I accept' />
					</div>
				</div>
				</form>
			</div>
		</div>
	)
});

export default AddEmotionModal;

'use client';
import * as Icons from '@/components/Icons';
import { observer } from 'mobx-react';
import { useStore } from '@/stores';

const AddEmotion = observer(() => {
	const { modalStore } = useStore();
	// const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<>
			<div className='flex items-center justify-center'>
				<button
					onClick={() => modalStore.openModal()}
					className='p-4 border-4 border-white rounded-full text-white cursor-pointer transition duration-300 ease-in-out hover:scale-105'
				>
					<Icons.PlusIcon height={ 50 } width={ 50 } />
				</button>
			</div>
			{/*<AddEmotionModal isOpen={ isOpenModal } setIsOpen={ setIsOpenModal } />*/}
		</>
	)
});

export default AddEmotion;

'use client';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import AddEmotion from '@/components/Board/AddEmotion';
import WrapperContainer from '@/components/WrapperContainer';
import Card from '@/components/Board/Card';
import AddEmotionModal from '@/components/Modals/AddEmotionModal';
import { useStore } from '@/stores';
import {
	DndContext,
	closestCorners,
	DragEndEvent,
	useSensors,
	useSensor,
	PointerSensor,
	KeyboardSensor
} from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { IEmoji } from '@/types/emoji';
import { Task } from '@/components/Board/Task/Task';

const Board = observer(() => {
	// const [ emotions, setEmotions ] = useState<null | IEmoji[]>([]);
	// const { emotionsStore } = useStore();
	// const [isOpenModal, setIsOpenModal] = useState(false);

	const [tasks, setTasks] = useState([
		{ id: 1, title: "Add tests to homepage" },
		{ id: 2, title: "Fix styling in about section" },
		{ id: 3, title: "Learn how to center a div" },
	]);

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	// useEffect(() => {
	// 	emotionsStore.getEmotions();
	// }, [emotionsStore]);
	//
	// useEffect(() => {
	// 	const arr = emotionsStore.emotions.map((i, index) => ({...i, id: index+1}))
	// 	setEmotions(arr);
	// }, [emotionsStore.emotions]);
	//
	// const handleDragEnd = (event: DragEndEvent) => {
	// 	const { active, over } = event;
	//
	// 	console.log(active,over, event)
	//
	// 	if(!over) return;
	//
	// 	const emotionId = active.id as string;
	// 	const newStatus = over.id as string;
	//
	// 	console.log(emotionId,newStatus)
	// }

	const getTaskPos = (id: number) => tasks.findIndex((task) => task.id === id);

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (active.id === over.id) return;

		setTasks((tasks) => {
			const originalPos = getTaskPos(active.id);
			const newPos = getTaskPos(over.id);

			return arrayMove(tasks, originalPos, newPos);
		});
	};

	return (
		<div className='board'>
			<WrapperContainer>
				<DndContext onDragEnd={ handleDragEnd } collisionDetection={ closestCorners }>
					<div className='grid grid-cols-1 md:grid-cols-6 gap-2'>
						{/*<AddEmotion setIsOpen={ setIsOpenModal } />*/}
						<SortableContext items={tasks} strategy={verticalListSortingStrategy}>
							{tasks.map((task) => (
								<Task key={task.id} id={task.id} title={task.title} />
							))}
						</SortableContext>
					</div>
				</DndContext>
			</WrapperContainer>
			{/*{ isOpenModal && <AddEmotionModal isOpen={ isOpenModal } setIsOpen={ setIsOpenModal } /> }*/}
		</div>
	)
});

export default Board;

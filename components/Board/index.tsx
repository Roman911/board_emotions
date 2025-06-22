'use client';
import { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import AddEmotion from '@/components/Board/AddEmotion';
import WrapperContainer from '@/components/WrapperContainer';
import AddEmotionModal from '@/components/Modals/AddEmotionModal';
import { useStore } from '@/stores';
import {
	closestCenter,
	DndContext,
	DragEndEvent,
	DragOverlay,
	DragStartEvent,
	MouseSensor,
	TouchSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import Grid from './Grid';
import SortableItem from '@/components/Board/SortableItem';
import Item from '@/components/Board/Item';
import NoResult from '@/components/UI/NoResult';
import styles from './index.module.css';
import { twMerge } from 'tailwind-merge';
import { getDayPart } from '@/helpers/getDayPart';

const Board = observer(() => {
	const { emotionsStore } = useStore();
	const [ isOpenModal, setIsOpenModal ] = useState(false);
	const [ activeId, setActiveId ] = useState<string | null>(null);
	const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
	const dayPart = getDayPart();

	useEffect(() => {
		emotionsStore.getEmotions();
	}, [ emotionsStore ]);

	const handleDragStart = useCallback((event: DragStartEvent) => {
		setActiveId(event.active.id.toString());
	}, []);

	const handleDragEnd = useCallback((event: DragEndEvent) => {
		const { active, over } = event;

		if(!over) return;

		if(active.id !== over.id) {
			const oldIndex = emotionsStore.emotions.findIndex(item => item.id === active.id);
			const newIndex = emotionsStore.emotions.findIndex(item => item.id === over.id);

			if(oldIndex !== -1 && newIndex !== -1) {
				emotionsStore.setEmotions(arrayMove(emotionsStore.emotions, oldIndex, newIndex));
			}
		}

		setActiveId(null);
	}, []);

	const handleDragCancel = useCallback(() => {
		setActiveId(null);
	}, []);

	return (
		<div className={ twMerge(styles.board, styles[dayPart]) }>
			<WrapperContainer>
				<AddEmotion setIsOpen={ setIsOpenModal }/>
				{ emotionsStore.emotions.length ? <DndContext
					sensors={ sensors }
					collisionDetection={ closestCenter }
					onDragStart={ handleDragStart }
					onDragEnd={ handleDragEnd }
					onDragCancel={ handleDragCancel }
				>
					<SortableContext items={ emotionsStore.emotions } strategy={ rectSortingStrategy }>
						<Grid>
							{ emotionsStore.emotions.map(item => {
								return <SortableItem key={ item.id } emoji={ item }/>
							}) }
						</Grid>
					</SortableContext>
					<DragOverlay adjustScale style={ { transformOrigin: '0 0 ' } }>
						{ activeId ?
							<Item emoji={ emotionsStore.emotions.find(item => item.id.toString() === activeId)! } isDragging/>
							: null
						}
					</DragOverlay>
				</DndContext> : <NoResult message="You haven't added an emotion yet. Add your first emotion."/> }
			</WrapperContainer>
			{ isOpenModal && <AddEmotionModal isOpen={ isOpenModal } setIsOpen={ setIsOpenModal }/> }
		</div>
	)
});

export default Board;

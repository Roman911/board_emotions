'use client'

import { observer } from 'mobx-react';
import { useStore } from '@/stores';

const Counter = observer(() => {
	const { counterStore } = useStore();

	return (
		<div>
			<h1>Лічильник: {counterStore.count}</h1>
			<button onClick={() => counterStore.increment()}>+</button>
			<button onClick={() => counterStore.decrement()}>-</button>
		</div>
	);
});

export default Counter;

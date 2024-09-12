import React from 'react';
import ToDoListItem from './ToDoListItem';

export default function ToDoList({ items, getAndShowAllItems }) {
	return (
		<ul className="my-10">
			{items.map((item) => (
				<ToDoListItem key={item.id} {...{ item, getAndShowAllItems }}></ToDoListItem>
			))}
		</ul>
	);
}

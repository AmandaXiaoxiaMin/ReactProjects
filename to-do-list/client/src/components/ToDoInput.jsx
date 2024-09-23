import React from 'react';
import { useState } from 'react';
import AxiosInstance from '../axios';

export default function ToDoInput({ getAndShowAllItems }) {
	const [name, setName] = useState('');

	const addItem = async () => {
		try {
			await AxiosInstance.post('/addItem', { name });
			getAndShowAllItems();
			setName('');
		} catch (err) {
			console.error(err);
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && name !== '') {
			addItem(name);
		}
	};

	return (
		<div className="flex">
			<input
				className="flex-grow px-1 py-1 border-2 rounded-tl rounded-bl border-appGreen focus:outline-none"
				type="text"
				placeholder="To Do ..."
				value={name}
				onChange={(e) => setName(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<button
				className="w-auto border-l-0 rounded-tl-none rounded-bl-none disabled:opacity-60"
				onClick={addItem}
				disabled={name === ''}
			>
				Add Item
			</button>
		</div>
	);
}

import React from 'react';
import { useState } from 'react';
import AxiosInstance from '../axios';

function ToDoListItem({ item, getAndShowAllItems }) {
	const [editMode, setEditMode] = useState(false);

	const removeItem = async () => {
		try {
			await AxiosInstance.post('/removeItem', { id: item.id });
			getAndShowAllItems();
		} catch (err) {
			console.error(err);
		}
	};

	const updateItemName = async (newName) => {
		try {
			await AxiosInstance.post('/updateItemName', {
				id: item.id,
				name: newName,
			});
			getAndShowAllItems();
		} catch (err) {
			console.error(err);
		}
	};

	const saveChange = (newName) => {
		updateItemName(newName);
		setEditMode(false);
	};

	const markItemDone = async () => {
		try {
			await AxiosInstance.post('/markItemDone', { id: item.id });
			getAndShowAllItems();
		} catch (err) {
			console.error(err);
		}
	};

	return editMode === false ? (
		<DisplayPanel {...{ item, setEditMode, markItemDone, removeItem }} />
	) : (
		<EditPanel {...{ item, setEditMode, saveChange }} />
	);
}

export default ToDoListItem;

function DisplayPanel({ item, setEditMode, markItemDone, removeItem }) {
	return (
		<div className={`js-item-display-container-${item.id} flex flex-row items-center h-9`}>
			<div
				className={`pr-2 truncate flex-grow ${item.is_done ? 'italic line-through ' : ''} dark:text-white`}
			>
				{item.name}
			</div>
			<div className={`js-todo-${item.id} flex flex-row w-[84px] items-center`}>
				{!item.is_done && (
					<>
						<img className="img-btn" src="src/icons/check.png" onClick={markItemDone}></img>
						<img
							className="img-btn"
							src="src/icons/edit.png"
							onClick={() => setEditMode(true)}
						></img>
						<img className="img-btn" src="src/icons/delete.png" onClick={removeItem}></img>
					</>
				)}
			</div>
		</div>
	);
}

function EditPanel({ item, setEditMode, saveChange }) {
	const [newName, setNewName] = useState(item.name);

	return (
		<div className={`js-item-edit-container-${item.id} h-9 flex flex-row items-center`}>
			<input
				className="flex-grow py-1 border-b-2 border-appGreen focus:outline-none"
				type="text"
				value={newName}
				onChange={(e) => {
					setNewName(e.target.value);
				}}
			/>
			<button className="py-px ml-2" onClick={() => setEditMode(false)}>
				Cancel
			</button>
			<button className="py-px ml-2 " onClick={() => saveChange(newName)}>
				Save
			</button>
		</div>
	);
}

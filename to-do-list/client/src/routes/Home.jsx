import { useEffect, useState } from 'react';
import ModeSwitchBar from 'components/ModeSwitchBar';
import ToDoInput from 'components/ToDoInput';
import ToDoList from 'components/ToDoList';
import AxiosInstance from '../axios';

function Home() {
	const [items, setItems] = useState([]);

	const getAndShowAllItems = async () => {
		try {
			const response = await AxiosInstance.get('/getAllItems');
			setItems(response.data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getAndShowAllItems();
	}, []);

	const clearCompletedItems = async () => {
		try {
			await AxiosInstance.post('/clearCompletedItems');
			getAndShowAllItems();
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="h-screen dark:bg-slate-900">
			<ModeSwitchBar />
			<div className="flex flex-col items-center w-screen px-10 md:px-40 lg:px-80 ">
				<div className="mt-8 mb-4 text-3xl dark:text-white">To Do List</div>
				<div className="w-full">
					<ToDoInput {...{ getAndShowAllItems }} />
					<ToDoList {...{ items, getAndShowAllItems }} />
				</div>
				<button
					className="rounded disabled:opacity-60"
					onClick={clearCompletedItems}
					disabled={items.length === 0}
				>
					Clear Completed Items
				</button>
			</div>
		</div>
	);
}

export default Home;

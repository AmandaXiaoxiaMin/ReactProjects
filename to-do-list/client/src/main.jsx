import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from 'routes/Home';
import NotFound from 'routes/NotFound';
import './index.css';

const router = createBrowserRouter([
	{
		path: '*',
		element: <NotFound />,
	},
	{
		path: '/',
		element: <Home />,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

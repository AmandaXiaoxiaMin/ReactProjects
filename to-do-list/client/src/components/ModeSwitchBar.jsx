import { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use';

const LIGHT = 'light';
const DARK = 'dark';

export default function ModeSwitchBar() {
	const [theme, setTheme] = useState('');
	const [dark, setDark] = useLocalStorage('dark-mode', false);

	const toggleDarkMode = () => {
		if (theme === LIGHT) {
			setTheme(DARK);
			setDark(true);
		} else {
			setTheme(LIGHT);
			setDark(false);
		}
	};

	useEffect(() => {
		if (dark == null) return;
		dark === true ? setTheme(DARK) : setTheme(LIGHT);
	});

	useEffect(() => {
		if (theme === DARK) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	return (
		<div className="flex flex-row-reverse items-end w-full pt-3 pr-3 align-middle ">
			{theme === 'dark' ? (
				<img className="light-dark-btn" src="src/icons/light_mode.png" onClick={toggleDarkMode} />
			) : (
				<img className="light-dark-btn" src="src/icons/dark_mode.png" onClick={toggleDarkMode} />
			)}
		</div>
	);
}

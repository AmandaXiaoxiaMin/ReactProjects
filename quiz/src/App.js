import './App.css';
import './Components/General.css';
import React, { useState } from 'react';

import { QuizContext } from './Helpers/Contexts';
import Welcome from './Components/Welcome';
import CreateQuiz from './Components/CreateQuiz';
import TakeQuiz from './Components/TakeQuiz';

function App() {
	const [modeState, setModeState] = useState('welcome');
	return (
		<div className="App">
			<QuizContext.Provider value={{ modeState, setModeState }}>
				{modeState === 'welcome' && <Welcome />}
				{modeState === 'createQuiz' && <CreateQuiz />}
				{modeState === 'takeQuiz' && <TakeQuiz />}
			</QuizContext.Provider>
		</div>
	);
}

export default App;

import './App.css';
import './Components/General.css';
import React, { useState } from 'react';

import { QuizContext } from './Helpers/Contexts';
import Welcome from './Components/Welcome';
import CreateQuiz from './Components/CreateQuiz';
import ListQuizzes from './Components/ListQuizzes';
import TakeQuiz from './Components/TakeQuiz';
import EndTakeQuiz from './Components/EndTakeQuiz';

function App() {
	const [mode, setMode] = useState('welcome');
	const [questions, setQuestions] = useState([]);
	const [questionNum, setQuestionNum] = useState();
	const [score, setScore] = useState(0);

	return (
		<div className="App">
			<QuizContext.Provider
				value={{
					mode,
					setMode,
					questions,
					setQuestions,
					questionNum,
					setQuestionNum,
					score,
					setScore,
				}}
			>
				{mode === 'welcome' && <Welcome />}
				{mode === 'createQuiz' && <CreateQuiz />}
				{mode === 'listQuizzes' && <ListQuizzes />}
				{mode === 'takeQuiz' && <TakeQuiz />}
				{mode === 'endTakeQuiz' && <EndTakeQuiz />}
			</QuizContext.Provider>
		</div>
	);
}

export default App;

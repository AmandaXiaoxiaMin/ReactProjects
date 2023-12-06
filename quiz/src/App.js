import './App.css';
import './Components/General.css';
import React, { useState } from 'react';

import { QuizContext } from './Helpers/Contexts';
import Welcome from './Components/Welcome';
import CreateQuiz from './Components/CreateQuiz';
import ListQuizzes from './Components/ListQuizzes';
import TakeQuiz from './Components/TakeQuiz';
import EndTakeQuiz from './Components/EndTakeQuiz';
import CreateQuestion from './Components/CreateQuestion';
import EndCreateQuiz from './Components/EndCreateQuiz';
import PreviewQuiz from './Components/PreviewQuiz';

function App() {
	const [mode, setMode] = useState('welcome');
	const [questions, setQuestions] = useState([]);
	const [questionNum, setQuestionNum] = useState();
	const [score, setScore] = useState(0);
	const [newQuiz, setNewQuiz] = useState({
		quiz_num: -1,
		quiz_name: '',
		created_date: '',
		questions: [],
	});

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
					newQuiz,
					setNewQuiz,
				}}
			>
				{mode === 'welcome' && <Welcome />}
				{mode === 'createQuiz' && <CreateQuiz />}
				{mode === 'createQuestion' && <CreateQuestion />}
				{mode === 'previewQuiz' && <PreviewQuiz />}
				{mode === 'endCreateQuiz' && <EndCreateQuiz />}
				{mode === 'listQuizzes' && <ListQuizzes />}
				{mode === 'takeQuiz' && <TakeQuiz />}
				{mode === 'endTakeQuiz' && <EndTakeQuiz />}
			</QuizContext.Provider>
		</div>
	);
}

export default App;

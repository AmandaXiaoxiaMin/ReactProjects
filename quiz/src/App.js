import './App.css';
import './Components/reuse/General.css';
import React, { useState } from 'react';

import { QuizContext } from './Helpers/Contexts';
import Welcome from './Components/welcome/Welcome';
import CreateQuiz from './Components/createQuiz/CreateQuiz';
import ListQuizzes from './Components/takeQuiz/ListQuizzes';
import TakeQuiz from './Components/takeQuiz/TakeQuiz';
import EndTakeQuiz from './Components/takeQuiz/EndTakeQuiz';
import CreateQuestion from './Components/createQuiz/CreateQuestion';
import EndCreateQuiz from './Components/createQuiz/EndCreateQuiz';
import PreviewQuiz from './Components/createQuiz/PreviewQuiz';

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

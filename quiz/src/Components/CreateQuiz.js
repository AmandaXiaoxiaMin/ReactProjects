import { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';

import './CreateQuiz.css';

function CreateQuiz() {
	const { modeState, setModeState } = useContext(QuizContext);

	return <div className="create-quiz-container">create a quiz</div>;
}

export default CreateQuiz;
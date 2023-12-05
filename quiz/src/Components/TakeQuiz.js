import { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import './TakeQuiz.css';

function TakeQuiz() {
	const { modeState, setModeState } = useContext(QuizContext);

	return <div className="take-quiz-container">take a quiz</div>;
}

export default TakeQuiz;

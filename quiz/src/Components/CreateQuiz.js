import { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';

import './CreateQuiz.css';

function CreateQuiz() {
	const { setMode, newQuiz, setNewQuiz } = useContext(QuizContext);

	const handleOnchange = (e) => {
		setNewQuiz({
			...newQuiz,
			quiz_name: e.target.value,
		});
		if (e.target.value === '') {
			document.querySelector('.create-next-btn').classList.add('disable-btn');
		} else {
			document.querySelector('.create-next-btn').classList.remove('disable-btn');
		}
	};

	const createQuestions = () => {
		setMode('createQuestion');
	};

	return (
		<div className="container">
			<div>
				Quiz name: <input className="quiz-name-input" onChange={handleOnchange} type="text"></input>
			</div>
			<button className="create-next-btn disable-btn" onClick={createQuestions}>
				Next
			</button>
		</div>
	);
}

export default CreateQuiz;

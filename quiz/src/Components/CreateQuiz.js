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
			<div className="quiz-name-input-container">
				<label>Quiz name:</label>
				<input className="text-input" onChange={handleOnchange} type="text"></input>
			</div>

			<div className="button-container">
				<button className="create-next-btn disable-btn" onClick={createQuestions}>
					Next
				</button>
			</div>
		</div>
	);
}

export default CreateQuiz;

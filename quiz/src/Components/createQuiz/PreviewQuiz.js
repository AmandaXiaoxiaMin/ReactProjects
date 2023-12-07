import React, { useContext } from 'react';
import { QuizContext } from '../../Helpers/Contexts';
import './PreviewQuiz.css';
import { QuizBank } from '../../Helpers/QuizBank';

function PreviewQuiz() {
	const { setMode, newQuiz } = useContext(QuizContext);

	const submitQuiz = () => {
		QuizBank.push(newQuiz);
		setMode('endCreateQuiz');
	};

	const discardQuiz = () => {
		setMode('welcome');
	};
	return (
		<div className="container">
			<div>
				<div className="quiz-basic-info">
					<label>Quiz name:</label>
					{newQuiz.quiz_name}
				</div>
				<div className="quiz-questions">
					{newQuiz.questions.map((quest, index) => {
						return (
							<div>
								<div>
									<label>Question {index + 1}:</label>
									{quest.question}
								</div>
								<div>
									<label>Option A:</label>
									{quest.optionA}
								</div>
								<div>
									<label>Option B:</label>
									{quest.optionB}
								</div>
								<div>
									<label>Option C:</label>
									{quest.optionC}
								</div>
								<div>
									<label>Option D:</label>
									{quest.optionD}
								</div>
								<div>
									<label>Answer:</label>
									{quest.answer}
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="button-container">
				<button onClick={submitQuiz}>Submit</button>
				<button onClick={discardQuiz}>Discard</button>
			</div>
		</div>
	);
}

export default PreviewQuiz;

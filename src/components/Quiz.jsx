import { useState } from 'react'
import QUESTIONS from '../questions'
export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([])

	const activeQuestionIndex = userAnswers.length

	function handleSelectAnswer(selectedAnswer) {
		selectedAnswer(prevUserAnswers => {
			return [...prevUserAnswers, selectedAnswer]
		})
	}

	return (
		<div className='quetions'>
			<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
			<ul id='answers'>
				{QUESTIONS[activeQuestionIndex].answers.map(answer => (
					<li key={answer} className='answer'>
						{answer}
						<button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
					</li>
				))}
			</ul>
		</div>
	)
}

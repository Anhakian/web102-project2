import { useState , useEffect } from 'react'
import Questions from './Questions.js'
import Card from './Card.jsx';

const Structure = () => {
    const [shownQuestions, setShownQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {}, [shownQuestions]);

    const handleNextButtonClick = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setShownQuestions([...shownQuestions, currentQuestionIndex]);
        setIsAnswerCorrect(false);
    }

    const handleBackButtonClick = () => {
        if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    }

    const currentQuestion = Questions[currentQuestionIndex]

    const [userAnswer, setUserAnswer] = useState('');
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const verifyAnswer = (e) => {
        e.preventDefault();
    
        const correctAnswer = currentQuestion.answer;
        if (userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
            alert("Correct!")
            setIsAnswerCorrect(true);
        } 
        else {
            alert("Incorrect!");
            setIsAnswerCorrect(false);
        }
    }

    return (
        <div className="quiz">  
            <Card
                question={<h4>{currentQuestion.question}</h4>}
                answer={<h4>{currentQuestion.answer}</h4>}
                flip={false}
                album={currentQuestion.album}
                color={currentQuestion.color}
            />

            <form onSubmit={verifyAnswer}>
                <label htmlFor='name'>Song: </label>
                <input
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    type="text" 
                    name="answer" 
                    id="answer" />
                <button type="submit">Submit</button>
            </form>

            <div>
                <button className='back' onClick={handleBackButtonClick} disabled={currentQuestionIndex === 0}>Back</button>
                <button className='next' onClick={handleNextButtonClick} disabled={!isAnswerCorrect || currentQuestionIndex === Questions.length - 1}>Next</button>
            </div>
        </div>
    )
}

export default Structure;
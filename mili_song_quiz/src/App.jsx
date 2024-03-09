import { useState } from 'react'
import './App.css'
import Questions from './components/Questions'
import Card from './components/Card';

const App = () => {
  const [shownQuestions, setShownQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const selectRandomQuestion = () => {
    const availableQuestions = Questions.filter(question => !shownQuestions.includes(question));

    if (availableQuestions.length === 0) {
      setShownQuestions([]);
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    setShownQuestions([...shownQuestions, randomIndex]);
    setCurrentQuestionIndex(randomIndex);
  };

  const handleNextButtonClick = () => {
    selectRandomQuestion();
  }

  const handleBackButtonClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }

  const currentQuestion = Questions[currentQuestionIndex] || { question: '', answer: '' };

  return (
    <div className="App">
      <div className="quiz">
        <h3>Mili Song Quiz</h3>
        <h4>How many Mili songs can you guess?</h4>
        <h5>Number of questions: {Questions.length}</h5>
        <Card
          question={<h4>{currentQuestion.question}</h4>}
          answer={<h4>{currentQuestion.answer}</h4>}
          flip={false}
          album={currentQuestion.album}
          color={currentQuestion.color}
        />

        <div>
          <button className='back' onClick={handleBackButtonClick} disabled={currentQuestionIndex === 0}>Back</button>
          <button className='next' onClick={handleNextButtonClick}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default App

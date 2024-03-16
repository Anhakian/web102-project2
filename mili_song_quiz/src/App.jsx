import './App.css'
import Structure from './components/Structure'
import Questions from './components/Questions'


const App = () => {
  return (
    <div className="App">
      <div className="quiz">
        <h3>Mili Song Quiz</h3>
        <h4>How many Mili songs can you guess?</h4>
        <h5>Number of questions: {Questions.length}</h5>
        <Structure />
      </div>
    </div>
  )
}

export default App

import { useState } from 'react';
import {questions} from './data.js';

function App() {
  const [count, setCount] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [chechAnswered, setChechAnswered] = useState(false);

  const chechAnswer = (stautes) => {
    setChechAnswered(stautes)
  }
  
  const nextHandler = (status) => {

    setCount((prev) => prev + 1 );

    if( status ){
      setCorrectAnswer(prev => (
        prev + 1
      ))
    }

    
  }
  // console.log(correctAnswer);

  

  return (
    <div className="App">
      <div className='main-quiz'>
        { count <= questions.length -1 ?
          <>
          <h1>Question <span>{count + 1} / { questions.length }</span></h1>
          <div className='question'>
            <h2>{ questions[count].questionText }</h2>
          </div>
          <div className='answers'>
            { questions[count].answerOptions.map( (answer, index) => (
              // console.log(answer.answerOptions)
              <label htmlFor={`answer_${index}`} key={index}>
                <input type="radio" name="answer" id={`answer_${index}`} onClick={() => chechAnswer(answer.isCorrect)}/>
                {answer.answerText}
              </label>
            ))}

          </div>
          <button className='next' onClick={() => nextHandler(chechAnswered) }>Next Question</button>
        </>
        :
        <p>Your Score is {correctAnswer} / {questions.length}</p>
        }
        
      </div>
    </div>
  )
}

export default App

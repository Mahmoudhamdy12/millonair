import { useEffect, useState } from 'react'
import useSound from "use-sound"
import play from "../sounds/play.wav"
import correct from "../sounds/correct.wav"
import wait from "../sounds/wait.wav"
import wrong from "../sounds/wrong.mp3"

export default function Ttivia({
  data,
  questionNumber,
  setQuestionNumber,
  setStop,
}) {

  const [question, setQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [className, setClassname] = useState('answer')
  const [letsPlay] =useSound(play)
  const [correctAnswer] =useSound(correct)
  const [wrongAnswer] =useSound(wrong)
  const [waitAnswer] =useSound(wait)

  useEffect(()=> {
    letsPlay()
  },[letsPlay])

  useEffect(()=>{
    setQuestion(data[questionNumber - 1])
    
  },[data,questionNumber])

  const delay = (duration, callback)=> {
    setTimeout(() => {
      callback()
    }, duration);
  }

  const handelClick = (a)=> {
    setSelectedAnswer(a)
    setClassname('answer active')
    
    delay(3000, ()=> {
        setClassname(a.correct ? 'answer correct' : 'answer wrong')
      })
      delay(5000, ()=> {
        if (a.correct) {
        correctAnswer()
        delay(1000, ()=> {
          setQuestionNumber((prev)=> prev + 1)
          setSelectedAnswer(null)
        })
      } else {
        wrongAnswer()
        delay(1000, ()=> {
          setStop(true)
        })
      }
    })
    // setTimeout(() => {
    //   setClassname(a.correct ? 'answer correct' : 'answer wrong')
      
    // }, 3000);
  }
  
  return (
    <div className='trivia'>
        <div className='question'>{question?.question} </div>
        <div className='answers'>
          {question?.answers.map((a)=> (
            <div key={a.text} 
            className={selectedAnswer === a ? className : "answer"}
            onClick={()=> handelClick(a)} >
            {a.text}
          </div>
          )) }
        </div>
    </div>
  )
}

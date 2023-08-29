import { useEffect,useState } from "react"
import useSound from "use-sound";
import wrong from "../sounds/wrong.mp3"

export const Timer = ({setStop, questionNumber}) => {
    const [timer, setTimer] = useState(30)
    
    useEffect(()=> {
      const [Loser] = useSound(wrong)
      if (timer === 0 ) {
        Loser()
        setStop(true)
      }
      const intervel = setInterval(() => {
        setTimer((prev)=> prev - 1)
      }, 1000);
      return () => clearInterval(intervel);
    },[timer,setStop]);

    useEffect(()=> {
      setTimer(30)
    },[questionNumber])

    return timer
}

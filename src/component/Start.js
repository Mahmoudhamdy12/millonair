import { useRef } from "react"

const Start = ({setUserName}) => {
    const inputRef = useRef()
    const handelClick = () => {
        setUserName(inputRef.current.value)
    }
  return (
    <div className="start" >
        <input 
        placeholder="Enter Your Name" 
        className="input" 
        ref={inputRef} />
        <button 
        className="btnStart"
        onClick={handelClick}
        >Start</button>
    </div>
  )
}

export default Start
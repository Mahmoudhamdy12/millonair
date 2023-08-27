import { useEffect, useMemo, useState } from "react";
import Trivia from "./component/Trivia";
import { Timer } from "./component/Timer";
import Start from "./component/Start";
import "./app.css"
function App() {
  const [questionNumber,setQuestionNumber ] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState('$ 0')
  const [userName, setUserName] = useState(null)

  const data = [
    {
      id: 1,
      question: "كم عدد سور القرآن الكريم؟",
      answers: [
        {
          text: "111",
          correct: false,
        },
        {
          text: "114",
          correct: true,
        },
        {
          text: "112",
          correct: false,
        },
        {
          text: "113",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "ما هي أطول سورة في القران الكريم؟",
      answers: [
        {
          text: "البقرة",
          correct: true,
        },
        {
          text: "ال عمران",
          correct: false,
        },
        {
          text: "النساء",
          correct: false,
        },
        {
          text: "المائدة",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "ما هي أعظم ايه في القران الكريم؟",
      answers: [
        {
          text: "اول ايه من سورة البقرة",
          correct: false,
        },
        {
          text: "اخر ايه من سورة البقرة",
          correct: false,
        },
        {
          text: "اخر ايه من سورة الكهف",
          correct: false,
        },
        {
          text: "ايه الكرسي",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "كم عدد بنات النبي صلي الله عليه وسلم؟",
      answers: [
        {
          text: "بنتان",
          correct: false,
        },
        {
          text: "ثلاث بنات",
          correct: false,
        },
        {
          text: "اربعة بنات",
          correct: true,
        },
        {
          text: "خمس بنات",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "كم عدد الانبياء الذين ذكرو في القران الكريم؟",
      answers: [
        {
          text: "25 نبيا",
          correct: true,
        },
        {
          text: "18 نبيا",
          correct: false,
        },
        {
          text: "23 نبيا",
          correct: false,
        },
        {
          text: "28 نبيا",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "من هو النبي الذي كانت زوجته كافرة؟",
      answers: [
        {
          text: "يونس عليه السلام",
          correct: false,
        },
        {
          text: "ابراهيم عليه السلام",
          correct: false,
        },
        {
          text: "يوسف عليه السلام",
          correct: false,
        },
        {
          text: "لوط عليه السلام",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "من هو النبي الذي أرسل الى قوم عاد؟",
      answers: [
        {
          text: "شعيب عليه السلام",
          correct: false,
        },
        {
          text: "هود عليه السلام",
          correct: true,
        },
        {
          text: "رصالح عليه السلام",
          correct: false,
        },
        {
          text: "يونس عليه السلام",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "من هو النبي الذي آمن به جميع قومه؟ ",
      answers: [
        {
          text: "يونس عليه السلام",
          correct: true,
        },
        {
          text: "ادريس عليه السلام",
          correct: false,
        },
        {
          text: "عيسى عليه السلام",
          correct: false,
        },
        {
          text: "موسى عليه السلام",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "قوم أي من الأنبياء كانوا يعبدون الأيكة؟",
      answers: [
        {
          text: " شعيب عليه السلام",
          correct: true,
        },
        {
          text: " صالح عليه السلام",
          correct: false,
        },
        {
          text: " يوشع بن نون",
          correct: false,
        },
        {
          text: "نوح عليه السلام",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "من هو أول داعية في تاريخ الإسلام؟",
      answers: [
        {
          text: "الزبير بن العوام",
          correct: false,
        },
        {
          text: "النعمان بن بشير",
          correct: false,
        },
        {
          text: "زيد بن جارثة",
          correct: false,
        },
        {
          text: "مصعب بن عمير",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "كم تعادل الصلاه في المسجد الحرام",
      answers: [
        {
          text: "مئة الف صلاة",
          correct: true,
        },
        {
          text: "الف صلاة",
          correct: false,
        },
        {
          text: "مليون صلاة",
          correct: false,
        },
        {
          text: "مئة صلاة",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "ما هو العذاب الذي وقع على قوم ثمود؟",
      answers: [
        {
          text: "الطوفان",
          correct: false,
        },
        {
          text: "الصيحة",
          correct: true,
        },
        {
          text: "الزلزال",
          correct: false,
        },
        {
          text: "الرياح الشديدة",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "كم استغرق نزول القرآن الكريم؟",
      answers: [
        {
          text: "12 سنة ",
          correct: false,
        },
        {
          text: "18 سنة ",
          correct: false,
        },
        {
          text: "20 سنة ",
          correct: false,
        },
        {
          text: "23 سنة ",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "من هو النبي الذي لم يمت و مازال علي قيد الحياة ؟",
      answers: [
        {
          text: "يحيي عليه السلام",
          correct: false,
        },
        {
          text: "ابراهيم عليه السلام",
          correct: false,
        },
        {
          text: "عيسى عليه السلام",
          correct: true,
        },
        {
          text: "يونس عليه السلام",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "ما اسم الصحابي الجليل أبو هريرة؟",
      answers: [
        {
          text: "عبدالرحمن بن صخر الدوسي",
          correct: true,
        },
        {
          text: "عمرو بن هاشم",
          correct: false,
        },
        {
          text: "قيس بن ثابت",
          correct: false,
        },
        {
          text: "عبدالله بن هشام",
          correct: false,
        },
      ],
    },
    
  ];
  const moneyPyramid = useMemo( ()=> 
    [
      {id: 1, amount:'$ 100'},
      {id: 2, amount:'$ 200'},
      {id: 3, amount:'$ 300'},
      {id: 4, amount:'$ 500'},
      {id: 5, amount:'$ 1000'},
      {id: 6, amount:'$ 2000'},
      {id: 7, amount:'$ 4000'},
      {id: 8, amount:'$ 8000'},
      {id: 9, amount:'$ 16000'},
      {id: 10, amount:'$ 32000'},
      {id: 11, amount:'$ 64000'},
      {id: 12, amount:'$ 125000'},
      {id: 13, amount:'$ 250000'},
      {id: 14, amount:'$ 500000'},
      {id: 15, amount:'$ 1000000'},
    ].reverse(),
    []
    ) 

  useEffect(()=>{
    questionNumber > 1 &&
    setEarned(moneyPyramid.find((a)=> a.id === questionNumber - 1).amount)
  } ,[moneyPyramid,questionNumber]  )

  const handelReplay = ()=> {
    setQuestionNumber(1)
    setStop(false)
    setEarned('$ 0')
  }

  return (
    <div className="app">
      {userName ? (
        <>
      <div className="main" >
        {stop ? <h1 className="earned" > You earned :{earned} <button onClick={handelReplay} className="btnStart">Replay</button> </h1> : (
          <>
        <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber} /></div>
            <div className="name">Hello:{userName}</div>
        </div>
        <div className="bottom">
          <Trivia 
                        data={data} 
                        questionNumber={questionNumber} 
                        setQuestionNumber={setQuestionNumber}
                        setStop={setStop}  />
                        </div>
          </>
        ) }
      </div>
      <div className="pyramid" >
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
          <li key={m.id} className= { questionNumber === m.id ? 'moneyListItem active' : 'moneyListItem ' } >
            <span className="moneyListItemNumber">{m.id} </span>
            <span className="moneyListItemAmount">{m.amount} </span>
          </li>
          ))}
        </ul>
      </div>
        </>
      ) : < Start setUserName={setUserName} /> }
    </div>
  );
}

export default App;

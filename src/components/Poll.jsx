import React,{useState,useEffect} from 'react'
import { useParams, Route } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import Question from './Question'
import '../styles/poll.scss'

function Poll() {
  const [option, setOption]=useState(null)
  const [submitted, setSubmitted]=useState(false)

  const dispatch= useDispatch();

  const {id:questionId}=useParams();

  const {questions,auth,users}=useSelector(state=>state)

  useEffect(()=>{
    console.log("DID MOUNT",questionId, questions,auth,users);
  },[])

  const handleSubmit=()=>{


    console.log("Submit..",option);
  }

  return (
    <div className="poll">
      <Question
        questionId={questionId}
        questions={questions}
        users={users}
        poll={true}
        option={option}
        setOption={setOption}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default Poll

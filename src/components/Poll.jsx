import React,{useState} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import Question from './Question'
import {handleSaveQuestionAnswer} from '../actions/questions'
import '../styles/poll.scss'

function Poll() {
  const [option, setOption]=useState(null)
  const [submitted, setSubmitted]=useState(false)

  const dispatch= useDispatch()

  const {id:questionId}=useParams()

  const {questions,auth,users}=useSelector(state=>state)

  const handleSubmit=async ()=>{
    const ansData={
      authedUser:auth.username,
      qid:questionId,
      answer:option
    }
    await dispatch(handleSaveQuestionAnswer(ansData))
    setSubmitted(true)
  }

  const resultPage = `/question/${questionId}/result`

  if (submitted === true) {
      return <Redirect to={resultPage}/>;
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

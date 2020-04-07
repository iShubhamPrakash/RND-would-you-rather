import React,{useState,useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import Question from './Question'
import {handleSaveQuestionAnswer} from '../actions/questions'
import '../styles/poll.scss'

function Poll() {
  const [option, setOption]=useState(null)
  const [submitted, setSubmitted]=useState(false)

  const history=useHistory()
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
    history.push('/')
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

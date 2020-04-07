import {_getQuestions,_saveQuestion,_saveQuestionAnswer} from '../api/_DATA'
import {getUsers} from './users'
//Action types
export const GET_QUESTIONS='GET_QUESTIONS'
export const SAVE_QUESTION='SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER='SAVE_QUESTION_ANSWER'

//Actions
export const getQuestions=()=>(dispatch)=>{
  _getQuestions().then(questions=>{
    console.log("getQuestions called-",questions);
    dispatch({
      type:GET_QUESTIONS,
      payload: questions
    })
  })
}


export const handleSaveQuestion=(question)=>(dispatch,getState)=>{
  return  _saveQuestion(question)
  .then(qsn=>dispatch(saveQuestion(qsn)))
  .catch(e=>alert("Something went wrong..."))
}

export const saveQuestion=(question)=>{
  return{
    type:SAVE_QUESTION,
    payload: question
  }
}


export const handleSaveQuestionAnswer=(ansData)=>(dispatch,getState)=>{
  return _saveQuestionAnswer(ansData)
  // .then(_=>dispatch(saveQuestionAnswer(ansData)))
  .then(_=>{
    dispatch(getQuestions())
    dispatch(getUsers())
  })
  .catch(e=>alert("Something went wrong..."))
}

export const saveQuestionAnswer=(data)=>{
  return{
    type:SAVE_QUESTION_ANSWER,
    payload: data
  }
}


// let questions={}
// _getQuestions()
// .then(data=>questions=data)

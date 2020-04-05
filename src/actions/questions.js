import {_getQuestions,_saveQuestion,_saveQuestionAnswer} from '../api/_DATA'

//Action types
const GET_QUESTIONS='GET_QUESTIONS'
const SAVE_QUESTION='SAVE_QUESTION'
const SAVE_QUESTION_ANSWER='SAVE_QUESTION_ANSWER'

//Actions
export const getQuestions=(questions)=>{
  return{
    type:GET_QUESTIONS,
    payload: questions
  }
}

export const saveQuestion=(question)=>{
  return{
    type:SAVE_QUESTION,
    payload: question
  }
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

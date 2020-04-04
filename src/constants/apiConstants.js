import {_getUsers,_getQuestions,_saveQuestion,_saveQuestionAnswer} from '../api/_DATA'

export const getUsers=()=>_getUsers()
export const getQuestion=()=> _getQuestions()
export const saveQuestion=(question)=> _saveQuestion(question)
export const saveQuestionAnswer=({ authedUser, qid, answer })=> _saveQuestionAnswer({ authedUser, qid, answer })

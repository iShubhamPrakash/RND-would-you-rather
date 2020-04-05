import {GET_QUESTIONS,SAVE_QUESTION,SAVE_QUESTION_ANSWER} from '../actions/questions'

export const questionReducer=(state={},action)=>{
  switch(action.type){
    case GET_QUESTIONS:
      return {...state,...action.payload}
    default:
      return state
  }
}

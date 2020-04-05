import {USER_LOG_IN,USER_LOG_OUT} from '../actions/auth'

export const authReducer= (state={},action) => {

  switch(action.type){
    case USER_LOG_IN:
      return {...state,
        authenticated:true,
        username:action.payload}
    case USER_LOG_OUT:
      return {...state,
        authenticated:false,
        username:null}
    default:
      return state
  }

}
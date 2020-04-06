import {_getUsers} from '../api/_DATA'

// Action types
export const GET_USERS='GET_USERS'

//Actions
export const getUsers=()=>(dispatch)=>{
  _getUsers().then(users=>{
    dispatch({
      type:GET_USERS,
      payload: users
    })
  })
}
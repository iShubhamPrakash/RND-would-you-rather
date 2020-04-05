import {_getUsers} from '../api/_DATA'
import {GET_USERS,getUsers} from './users'

// Action types
export const FETCH_INITIAL_DATA='FETCH_INITIAL_DATA'

//Actions
export const fetchInitialData=(users)=>(dispatch)=>{
  return _getUsers().then(data=>{
    dispatch(getUsers(data))
  })
}
import {combineReducers} from 'redux'

import { authReducer } from './auth'
import { questionReducer } from './questions'
import { usersReducer } from './users'

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  questions: questionReducer
})

export default rootReducer
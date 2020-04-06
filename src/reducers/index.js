import {combineReducers} from 'redux'

import { authReducer } from './auth'
import { questionReducer } from './questions'
import { usersReducer } from './users'
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  questions: questionReducer,
  loadingBar: loadingBarReducer,
})

export default rootReducer
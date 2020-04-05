
// Action types
export const USER_LOG_IN='USER_LOG_IN'
export const USER_LOG_OUT='USER_LOG_OUT'

// Actions
export const userLogIn=(username)=>{
  return{
    type:USER_LOG_IN,
    payload: username
  }
}
export const userLogOut=()=>{
  return{
    type:USER_LOG_OUT
  }
}
import React from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'

import '../styles/login.scss'

import {userLogIn} from '../actions/auth'
import { useHistory } from "react-router-dom"
// import { showLoading, hideLoading } from 'react-redux-loading-bar'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function Login(props) {
  const classes = useStyles()
  const [username, setUsername] = React.useState('')

  let history = useHistory()

  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    // props.dispatch(showLoading)
    props.dispatch(userLogIn(username))
    // props.dispatch(hideLoading)
    history.push('/')
  }


  return (
    <div className="login">
      <Card className="login__card">
        <h2>WELCOME</h2>
        <p>Please login to play the game</p>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Please select a user</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={username}
            onChange={handleChange}
          >
            {Object.keys(props.users).map(userId=><MenuItem value={userId} key={userId}>{props.users[userId].name}</MenuItem>)}
          </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSubmit} disabled={username === ""}>
        Log In
      </Button>
      </Card>
    </div>
  )
}

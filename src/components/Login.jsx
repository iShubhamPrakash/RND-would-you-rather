import React,{useEffect} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

import '../styles/login.scss'

import {userLogIn} from '../actions/auth'
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const [username, setUsername] = React.useState('');

  useEffect(()=>{
    console.log("Lonin props-",props)
  })

  let history = useHistory()

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    props.dispatch(userLogIn(username))
    history.push('/add')
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
            {Object.keys(props.users).map(userId=><MenuItem value={userId}>{props.users[userId].name}</MenuItem>)}
          </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Log In
      </Button>
      </Card>
    </div>
  )
}

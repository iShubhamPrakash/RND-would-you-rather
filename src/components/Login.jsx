import React from 'react'
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

import {_getUsers,_getQuestions,_saveQuestion,_saveQuestionAnswer} from '../api/_DATA'

import '../styles/login.scss'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  _getUsers()
  .then(data=>console.log(_getUsers(data)))

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
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={"sarahedo"}>Sarah Edo</MenuItem>
            <MenuItem value={"tylermcginnis"}>Tyler McGinnis</MenuItem>
            <MenuItem value={"johndoe"}>John Doe</MenuItem>
          </Select>
      </FormControl>
      <Button variant="contained" color="primary">
        Log In
      </Button>
      </Card>
    </div>
  )
}

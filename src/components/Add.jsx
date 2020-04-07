import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {handleSaveQuestion} from '../actions/questions'

import '../styles/add.scss'

export default function Add() {

  const [optionOne,setOptionOne]=useState("")
  const [optionTwo,setOptionTwo]=useState("")

  const {username}=useSelector(state=>state.auth)
  const dispatch=useDispatch()
  const history=useHistory()


  const handleSubmit=(e)=>{

    const newQuestion = {
      author:username,
      optionOneText:optionOne,
      optionTwoText:optionTwo,
    }
    dispatch(handleSaveQuestion(newQuestion))
    history.push('/')
  }
  return (
    <div className="add">
      <Card className="add--card" >
      <CardContent>
        <CardMedia
          style={{height:"200px"}}
          image="/question.jpg"
          title="Contemplative Reptile"
        />
       <br/>
        <Typography variant="h5" component="h2">
          Would you rather...?
        </Typography>
        <br/>
        <form noValidate autoComplete="off" className="add--form">
          <TextField label="Option one" className="add--form--input" value={optionOne} onChange={e=>setOptionOne(e.target.value)}/> <br/><br/>
          <TextField label="Option two" className="add--form--input" value={optionTwo} onChange={e=>setOptionTwo(e.target.value)}/>
        </form>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          color="primary"
          style={{margin:"0 auto"}}
          disabled={optionOne==="" || optionTwo=== ""}
          onClick={handleSubmit}
        >
          Add Question
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

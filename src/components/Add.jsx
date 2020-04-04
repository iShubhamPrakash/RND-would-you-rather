import React from 'react'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'

import '../styles/add.scss'

export default function Add() {
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
          <TextField label="Option one" className="add--form--input"/> <br/><br/>
          <TextField label="Option two" className="add--form--input"/>
        </form>
      </CardContent>
      <CardActions>
        <Button size="medium" color="primary" style={{margin:"0 auto"}}>Add Question</Button>
      </CardActions>
    </Card>
    </div>
  )
}

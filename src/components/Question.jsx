import React, {useState}from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

export default function question({questionId,questions,users}) {

  console.log("id=",questionId)
  console.log("question=",questions)
  const author= questions[questionId].author
  const {name,avatarURL}=users[author]

  const {optionOne,optionTwo}= questions[questionId]

  return (
    <div className="question">
      <div className="card">
        <div className="header">{name} asks whould you rather...</div>
        <div className="data">
          <div className="profile">
            <img src={avatarURL} alt="profile"/>
          </div>
          <div className="poll">
            <p className="poll__text">{optionOne.text}</p>
            OR
            <p className="poll__text">{optionTwo.text}</p>
            <Link to={'/question/'+questionId}>
              <Button variant="contained" color="primary">
                View Poll
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

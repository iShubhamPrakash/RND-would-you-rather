import React, {useState}from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

export default function question(props) {

  const {questionId,questions,users,option,setOption,handleSubmit,poll=false} = props

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
           {!poll? <>
            <p className="poll__text">{optionOne.text}</p>
            OR
            <p className="poll__text">{optionTwo.text}</p>
            <Link to={'/question/'+questionId}>
              <Button variant="contained" color="primary">
                View Poll
              </Button>
            </Link>
            </>:<>
            <FormControl component="fieldset">
              <FormLabel component="legend">Select one option</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={option} onChange={e=>setOption(e.target.value)}>
                <FormControlLabel value="optionOne" control={<Radio />} label={optionOne.text} />
                <FormControlLabel value="optionTwo" control={<Radio />} label={optionTwo.text} />
              </RadioGroup>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </FormControl>
            </>}
          </div>
        </div>

      </div>
    </div>
  )
}

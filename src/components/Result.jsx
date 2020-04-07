import React from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'
import '../styles/result.scss'


function Result() {
  const {id}=useParams()
  const {questions,users,auth}=useSelector(state=>state)

  const {author,optionOne,optionTwo}=questions[id]

  const {name,avatarURL}=users[author]


  const optionSelected = optionOne.votes.includes(auth.username) ? "optionOne" : "optionTwo";

  const optionOneVotes= optionOne.votes.length
  const optionTwoVotes= optionTwo.votes.length
  const totalVotes= optionOneVotes + optionTwoVotes

  const optionOnePercent= Number.parseFloat((optionOneVotes/totalVotes)*100).toFixed(1)
  const optionTwoPercent= Number.parseFloat((optionTwoVotes/totalVotes)*100).toFixed(1)

  return (
    <div className="container result">
      <div className="card">
        <div className="header">Question added by {name} </div>
        <div className="data">
          <div className="profile">
            <img src={avatarURL} alt="profile"/>
          </div>
          <div className="poll">
            <div className={optionSelected === 'optionOne' ? "vote active":"vote"}>
              <p className="poll__text">{optionOne.text}</p>
              <LinearProgress variant="determinate" value={optionOnePercent} color="secondary" />
              <p>{optionOneVotes} out of {totalVotes} votes, {optionOnePercent}%</p>
            </div>
            <div className={optionSelected === 'optionTwo' ? "vote active":"vote"}>
              <p className="poll__text">{optionTwo.text}</p>
              <LinearProgress variant="determinate" value={optionTwoPercent} color="secondary" />
              <p>{optionTwoVotes} out of {totalVotes} votes, {optionTwoPercent}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result

import React from 'react'
import {useSelector} from 'react-redux'

import '../styles/leaderboard.scss'

function LeaderBoard() {


  const {users} = useSelector(state=>state)

  const leaderList= Object.keys(users).map(userId=>{
    const user = users[userId]
    const answersCount=Object.keys(user.answers).length
    const questionsCount=Object.keys(user.questions).length

    const userData={
      name: user.name,
      avatar: user.avatarURL,
      answersCount:answersCount,
      questionsCount:questionsCount,
      totalContribution:answersCount+questionsCount
    }

    return userData
  })


  leaderList.sort((a,b)=>{
    if(a.totalContribution > b.totalContribution)
      return -1
    else if(a.totalContribution < b.totalContribution)
      return 1
    return 0
  })

  return (
    <div className="container leader">
      <h1>Leader Board</h1>
      {
        leaderList.map((user,i)=>{
          return <div className="card" key={i}>
            <div className="header">{i+1}. {" "} {user.name}</div>
            <div className="data">
              <div className="profile">
                <img src={user.avatar} alt="profile"/>
              </div>
              <div className="poll">
                <p className="poll__text">Total Contribution: {user.totalContribution}</p>
                <p className="poll__text">Question asked: {user.questionsCount}</p>
                <p className="poll__text">Answered: {user.answersCount}</p>
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default LeaderBoard

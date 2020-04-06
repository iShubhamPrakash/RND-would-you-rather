import React from 'react'
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
export default function NoFound() {
  let history= useHistory()
  return (
    <div className="noFound" style={{height:"100vh"}}>
      <Card className="noFound__card" style={{width: "400px", margin:"100px auto auto auto", padding: "2em"}}>
        <h1>404</h1>
        <p>PAGE NOT FOUND</p>

      <Button variant="contained" color="primary" onClick={e=>{
        history.push('/')
      }}>
        Go to Home
      </Button>
      </Card>
    </div>
  )
}

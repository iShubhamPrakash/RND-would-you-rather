import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import TouchAppOutlinedIcon from '@material-ui/icons/TouchAppOutlined'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import {userLogOut} from '../actions/auth'
import {NavLink} from 'react-router-dom'
import { useHistory } from "react-router-dom"

import '../styles/nav.scss'

export default function Nav(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let history = useHistory()


  return (
   <div className={"nav"}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <TouchAppOutlinedIcon />
          </IconButton>
          <Typography variant="h6">
            Would you rather?
          </Typography>
          {props.username && <>
            <ul className="nav--links">
            <li><NavLink exact to="/" >Home</NavLink></li>
            <li><NavLink to="/add" >Ask Question</NavLink></li>
            <li><NavLink to="/leaderboard" >Leader Board</NavLink></li>
          </ul>

          <div style={{flexGrow:"1"}}></div>
          <Typography variant="body1" className="nav--username">
            Hey {props.username}
          </Typography>
          <Button
            color="inherit"
            endIcon={<ExitToAppIcon/>}
            onClick={e=>{
              props.dispatch(userLogOut())
              history.push('/login')
            }}
          >
              Log out
          </Button>
          </>}
        </Toolbar>
      </AppBar>
    </div>
  )
}

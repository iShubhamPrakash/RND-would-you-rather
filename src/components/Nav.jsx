import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import TouchAppOutlinedIcon from '@material-ui/icons/TouchAppOutlined'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

import {NavLink} from 'react-router-dom'

import '../styles/nav.scss'

export default function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
          <ul className="nav--links">
            <li><NavLink exact to="/" >Home</NavLink></li>
            <li><NavLink to="/add" >Ask Question</NavLink></li>
            <li><NavLink to="/leader" >Leader Board</NavLink></li>
          </ul>

          <div style={{flexGrow:"1"}}></div>
          <Typography variant="p" className="nav--username">
            Hey user
          </Typography>
          <Button
            color="inherit"
            endIcon={<ExitToAppIcon/>}
          >
              Log out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

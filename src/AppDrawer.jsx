import React from 'react'
import Drawer from 'material-ui/Drawer'
import Typography from 'material-ui/Typography'
import Toolbar from 'material-ui/Toolbar'
import Divider from 'material-ui/Divider'
import List, { ListItem, ListSubheader } from 'material-ui/List'
import Link from './Link'
import { version } from 'stone-definitions'
import injectSheet from 'mui-jss-inject'

import logo from './branding/logo.svg'
import logotype from './branding/logotype.svg'

const styles = {
  toolbar: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  drawerPaper: {
    width: 250,
    maxWidth: 250,
    position: 'relative'
  },
  logo: {
    height: 24,
    paddingRight: 10,
    '-webkit-user-drag': 'none'
  },
  logoType: {
    height: 18,
    '-webkit-user-drag': 'none'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    padding: [10, 0],
    width: '100%',
    justifyContent: 'center',
    marginLeft: -5
  },
  version: {
    textAlign: 'right',
    paddingRight: 16,
    fontSize: '0.8em'
  }
}

const AppDrawer = ({ classes, open, onRequestClose, onClick, docked }) => {
  return (
    <Drawer onClick={onClick} open={open} docked={docked} onRequestClose={onRequestClose} paperClassName={classes.drawerPaper}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logoContainer}>
          <img src={logo} alt="Stone Logo" className={classes.logo}/>
          <img src={logotype} alt="STONE" className={classes.logoType}/>
        </div>
      </Toolbar>
      <Divider />
      <List>
        <Link to="/"><ListItem button>Home</ListItem></Link>
        <ListSubheader>Definitions</ListSubheader>
        <Link to="/defs/platforms"><ListItem button>Platforms</ListItem></Link>
        <Link to="/defs/controllers"><ListItem button>Controllers</ListItem></Link>
        <Divider />
        <ListSubheader>Specifications</ListSubheader>
        <Link to="/spec/platforms"><ListItem button>Platforms</ListItem></Link>
        <Link to="/spec/controllers"><ListItem button>Controllers</ListItem></Link>
        <Link to="/spec/versioning"><ListItem button>Versioning</ListItem></Link>
        <Divider />
        <ListSubheader className={classes.version}>{version}</ListSubheader>
      </List>
    </Drawer>
  )
}

export default injectSheet(styles)(AppDrawer)

import React from 'react'
import Drawer from 'material-ui/Drawer'
import Typography from 'material-ui/Typography'
import Toolbar from 'material-ui/Toolbar'
import Divider from 'material-ui/Divider'
import List, { ListItem, ListSubheader } from 'material-ui/List'
import Link from './Link'
import { version } from 'stone-definitions'
import injectSheet from 'mui-jss-inject'

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
  }
}

const AppDrawer = ({ classes, open, onRequestClose, onClick, docked }) => {
  return (
    <Drawer onClick={onClick} open={open} docked={docked} onRequestClose={onRequestClose} paperClassName={classes.drawerPaper}>
      <Toolbar className={classes.toolbar}>
        <Typography type="subheading">Stone</Typography>
        <Typography type="caption">{version}</Typography>
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
      </List>
    </Drawer>
  )
}

export default injectSheet(styles)(AppDrawer)

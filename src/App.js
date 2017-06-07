// @ts-nocheck
import React, { Component } from 'react'
import './App.css'
import 'typeface-roboto'

import { version, Platforms, Controllers } from 'stone-definitions'
import List, { ListItem, ListSubheader } from 'material-ui/List'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'
import injectSheet from 'mui-jss-inject'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import PlatformsList from './PlatformsList'
import ControllersList from './ControllersList'

import { purple, grey } from 'material-ui/styles/colors'

import Link from './Link'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'

import Markdown from './Markdown'

import Home from './stone/Readme.md'
import ControllerSpec from './stone/spec/Controllers.md'
import PlatformSpec from './stone/spec/Platform.md'
import Versioning from './stone/spec/Versioning.md'

const styles = {
  drawerPaper: {
    width: 250,
    position: 'fixed'
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '[drawer] 250px [main] auto',
    minHeight: '100vh'
  },
  innerContainer: {
    gridColumn: 'main'
  },
  appBar: {
    position: 'relative'
  },
  appBarPaper: {
    backgroundColor: purple[300]
  },
  toolbar: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  mainContent: {
    height: 'calc(100vh - 64px)',
    overflowY: 'hidden',
    display: 'flex',
    backgroundColor: grey[50]
  }
}

class App extends Component {
  render () {
    return (
      <Router>
        <div className={this.props.classes.container}>
          <Drawer open docked paperClassName={this.props.classes.drawerPaper}>
            <Toolbar className={this.props.classes.toolbar}>
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

          <div className={this.props.classes.innerContainer}>
            <AppBar className={this.props.classes.appBar} classes={{ appBar: this.props.classes.appBarPaper }}>
              <Toolbar>
                <Typography type="title" colorInherit>
                  <Route path="/defs/platforms" render={() => <span>Platform Definitions</span>} />
                  <Route path="/defs/controllers" render={() => <span>Controller Layout Definitions</span>} />
                  <Route path="/spec/platforms" render={() => <span>Specification &mdash; Platforms</span>} />
                  <Route path="/spec/controllers" render={() => <span>Specification &mdash; Controllers</span>} />
                  <Route path="/spec/versioning" render={() => <span>Versioning</span>} />
                  <Route exact path="/" render={() => <span>Stone</span>} />
                </Typography>
              </Toolbar>
            </AppBar>
            <div className={this.props.classes.mainContent}>
              <Switch>
                <Route exact path="/" render={() => <Markdown markdown={Home} />}/>
                <Route path="/spec/platforms" render={() => <Markdown markdown={PlatformSpec} />} />
                <Route path="/spec/controllers" render={() => <Markdown markdown={ControllerSpec} />} />
                <Route path="/spec/versioning" render={() => <Markdown markdown={Versioning} />} />
                <Route path="/defs/platforms" render={() => <PlatformsList platforms={Platforms} />} />
                <Route path="/defs/controllers" render={() => <ControllersList platforms={Platforms} controllers={Controllers} />} />
                <Redirect from='*' to='/' />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default injectSheet(styles)(App)

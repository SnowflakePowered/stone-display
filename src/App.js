// @ts-nocheck
import React, { Component } from 'react'
import './App.css'
import 'typeface-roboto'

import { Platforms, Controllers } from 'stone-definitions'

import Typography from 'material-ui/Typography'
import injectSheet from 'mui-jss-inject'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import AppDrawer from './AppDrawer'

import PlatformsList from './PlatformsList'
import ControllersList from './ControllersList'

import { purple, grey } from 'material-ui/styles/colors'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'

import Markdown from './Markdown'

import Home from './stone/Readme.md'
import ControllerSpec from './stone/spec/Controllers.md'
import PlatformSpec from './stone/spec/Platform.md'
import Versioning from './stone/spec/Versioning.md'

import withWidth, { isWidthUp } from 'material-ui/utils/withWidth'

const styles = {
  container: {
    display: 'flex'
  },
  innerContainer: {
    width: '100%'
  },
  appBar: {
    position: 'relative'
  },
  appBarPaper: {
    backgroundColor: purple[300]
  },
  mainContent: {
    height: 'calc(100vh - 64px)',
    overflowY: 'hidden',
    display: 'flex',
    backgroundColor: grey[50]
  }
}

class App extends Component {
  state = {
    drawerOpen: false
  }

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false })
  }

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render = () => {
    const drawerDocked = isWidthUp('lg', this.props.width)
    return (
      <Router>
        <div className={this.props.classes.container}>
          <AppDrawer docked={drawerDocked} onClick={this.handleDrawerClose} open={drawerDocked ? true : this.state.drawerOpen} />
          <div className={this.props.classes.innerContainer}>
            <AppBar className={this.props.classes.appBar} classes={{ appBar: this.props.classes.appBarPaper }}>
              <Toolbar>
                {
                  (!drawerDocked
                    ? <IconButton contrast>
                      <MenuIcon onClick={this.handleDrawerToggle} />
                    </IconButton>
                    : '')
                }
                <Typography type="title" colorInherit>
                  <Route path="/defs/platforms" render={() => <span>Platform Definitions</span>} />
                  <Route path="/defs/controllers" render={() => <span>Controller Layout Definitions</span>} />
                  <Route path="/spec/platforms" render={() => <span>Specification &mdash; Platforms</span>} />
                  <Route path="/spec/controllers" render={() => <span>Specification &mdash; Controllers</span>} />
                  <Route path="/spec/versioning" render={() => <span>Versioning</span>} />
                  <Route exact path="/" render={() => <span>Home</span>} />
                </Typography>
              </Toolbar>
            </AppBar>
            <div className={this.props.classes.mainContent}>
              <Switch>
                <Route exact path="/" render={() => <Markdown markdown={Home} />} />
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

export default injectSheet(styles)(withWidth()(App))

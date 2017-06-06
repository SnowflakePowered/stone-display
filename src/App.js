import React, { Component } from 'react'
import './App.css'
import { Platforms, Controllers } from 'stone-definitions'
import List, { ListItem, ListSubheader } from 'material-ui/List'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'
import injectSheet from 'mui-jss-inject'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import PlatformsList from './PlatformsList'
import ControllersList from './ControllersList'

import Link from './Link'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import Markdown from 'react-markdown-renderer'

import Home from './stone/Readme.md'

const styles = {
  drawerPaper: {
    width: 250,
    position: 'relative'
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '[drawer] 250px [main] auto',
    overflowY: 'hidden',
    height: '100vh'
  },
  innerContainer: {
    gridColumn: 'main'
  },
  appBar: {
    position: 'relative',
  },
}

class App extends Component {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <Router>
        <div className={this.props.classes.container}>
          <Drawer open docked paperClassName={this.props.classes.drawerPaper}>
            <List>
              <ListItem dense>
                <div>
                <Typography type="subheading">Stone</Typography>
                <Typography type="caption">7.0.0-alpha.1</Typography>
                </div>
              </ListItem>
             
              <Divider/>
              <Link to="/"><ListItem button>Home</ListItem></Link>
              <ListSubheader>Definitions</ListSubheader>
              <Link to="/defs/platforms"><ListItem button>Platforms</ListItem></Link>
              <Link to="/defs/controllers"><ListItem button>Controllers</ListItem></Link>
              <Divider />
              <ListSubheader>Specifications</ListSubheader>
              <Link to="/spec/platforms"><ListItem button>Platforms</ListItem></Link>
              <Link to="/spec/controllers"><ListItem button>Controllers</ListItem></Link>
            </List>
          </Drawer>

          <div className={this.props.classes.innerContainer}>
            <AppBar className={this.props.classes.appBar}>
              <Toolbar>
                <Typography type="title" colorInherit>
                    <Route path="/defs/platforms" render={()=> <span>Platform Definitions</span> }/>
                    <Route path="/defs/controllers" render={()=> <span>Controller Layout Definitions</span> }/>
                    <Route path="/spec/platforms" render={()=> <span>Specification &mdash; Platforms</span> }/>
                    <Route path="/spec/controllers" render={()=> <span>Specification &mdash; Controllers</span> }/>
                    <Route exact path="/" render={()=> <span>Stone</span> }/>

                </Typography>
              </Toolbar>
            </AppBar>
            <Route exact path="/" render={() => <Typography>
              <Markdown markdown={Home}/>
            </Typography>}/>            
            <Route path="/defs/platforms" render={() => <PlatformsList platforms={Platforms} />}/>
            <Route path="/defs/controllers" render={() => <ControllersList controllers={Controllers} />}/>

          </div>
        </div>
      </Router>
    );
  }
}

export default injectSheet(styles)(App);

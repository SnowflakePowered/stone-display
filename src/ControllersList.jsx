import React from 'react'

import injectSheet from 'mui-jss-inject'
import { withRouter, Route } from 'react-router-dom'
import Typography from 'material-ui/Typography'
import List, { ListItem } from 'material-ui/List'
import Button from 'material-ui/Button'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import Link from './Link'
import Drawer from 'material-ui/Drawer'
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth'

const styles = {
  container: {
    display: 'flex',
    gridTemplateColumns: '[list] 25% [main] auto',
    gridTemplateRows: '100%',
    height: '100%',
    width: '100%'
  },
  list: {
    gridColumn: 'list',
    position: 'relative',
    height: '100%'
  },
  main: {
    gridColumn: 'main',
    overflowY: 'auto',
    height: '100%',
    width: '100%'
  },
  controllerDisplay: {
    padding: 10
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 32
  },
  paper: {
    margin: [32, 32]
  },
  paperHeader: {
    padding: [0, 24],
    paddingTop: 12
  },
  table: {
    tableLayout: 'fixed',
    overflowX: 'auto'
  },
  platformDisplay: {
    padding: 10
  },
  drawerPaper: {
    width: 250,
    maxWidth: 250,
    position: 'relative',
    zIndex: 0,
    height: 'inherit'
  },
  drawer: {
    height: '100%'
  },
  headline: {
    width: '80%'
  },
  tableCell: {
    overflowX: 'auto',
    paddingRight: 10
  },
  details: {
    width: '100%'
  }

}

const GithubLink = 'https://github.com/SnowflakePowered/stone/blob/master/controller/'
const ControllerDisplay = ({ drawerDocked, handleDrawerToggle, controller, platforms, classes }) => {
  return (
    <div>
      <div className={classes.header}>
        <Typography className={classes.headline} type="headline">{controller.FriendlyName}</Typography>
        <MenuButton drawerDocked={drawerDocked} handleDrawerToggle={handleDrawerToggle} />
        <Link extern to={GithubLink + `${controller.LayoutID}.yml`}><Button>Edit on GitHub</Button></Link>
      </div>

      <Paper className={classes.paper}>
        <Typography className={classes.paperHeader} type="title" bold>Controller</Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography type="caption">Stone Layout ID</Typography>
              </TableCell>
              <TableCell>
                <Typography compact className={classes.tableCell}>
                  <pre>{controller.LayoutID}</pre>
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography type="caption">Friendly Name</Typography>
              </TableCell>
              <TableCell compact className={classes.tableCell}>
                <Typography>{controller.FriendlyName}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.paper}>
        <Typography className={classes.paperHeader} type="title" bold>Layout</Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Label</TableCell>
              <TableCell>Element</TableCell>
              <TableCell>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              Object.entries(controller.Layout).map(([k, v]) => (
                <TableRow key={k}>
                  <TableCell compact className={classes.tableCell}>{v.Label}</TableCell>
                  <TableCell compact className={classes.tableCell}>{k}</TableCell>
                  <TableCell compact className={classes.tableCell}>{v.Type}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.paper}>
        <Typography className={classes.paperHeader} type="title" bold>Supported Platforms</Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Platform</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              controller.Platforms.map(p => platforms[p]).map(p => (
                <TableRow key={p.PlatformID}>
                  <TableCell compact className={classes.tableCell}>
                    <Typography type="caption">{p.FriendlyName}</Typography>
                  </TableCell>
                  <TableCell>
                    <Link to={`/defs/platforms/${p.PlatformID}`}>
                      <Button raised accent className={classes.details}>See Details</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

const MenuButton = ({ drawerDocked, handleDrawerToggle }) => {
  if (!drawerDocked) {
    return (<Button onClick={handleDrawerToggle}>Select a Controller</Button>)
  } else {
    return <div />
  }
}

class ControllerList extends React.Component {
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
    const { controllers, platforms, match, classes, width } = this.props
    const drawerDocked = isWidthUp('lg', width)

    return (
      <div className={classes.container}>
        <div className={classes.list}>
          <Drawer
            docked={drawerDocked}
            open={drawerDocked ? true : this.state.drawerOpen}
            className={classes.drawer}
            paperClassName={classes.drawerPaper}
            onClick={this.handleDrawerClose}>
            <List>
              {Object.values(controllers).map(c =>
                <Link to={`${match.url}/${c.LayoutID}`}>
                  <ListItem button>{c.FriendlyName}</ListItem>
                </Link>)}
            </List>
          </Drawer>
        </div>
        <div className={classes.main}>
          <Route exact path={`${match.url}`} render={() =>
            <div className={classes.controllerDisplay}>
              <MenuButton drawerDocked={drawerDocked} handleDrawerToggle={this.handleDrawerToggle} />
            </div>
          } />
          <Route path={`${match.url}/:layoutId`} render={({ match }) => {
            if (controllers[match.params.layoutId] !== undefined) {
              return (
                <div>
                  <ControllerDisplay
                    drawerDocked={drawerDocked}
                    handleDrawerToggle={this.handleDrawerToggle}
                    classes={classes}
                    platforms={platforms}
                    controller={controllers[match.params.layoutId]} />
                </div>
              )
            } else {
              return (
                <div className={classes.controllerDisplay}>
                  <MenuButton drawerDocked={drawerDocked} handleDrawerToggle={this.handleDrawerToggle} />
                </div>
              )
            }
          }
          } />
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(withWidth()(withRouter(ControllerList)))

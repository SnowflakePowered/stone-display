import React from 'react'

import injectSheet from 'mui-jss-inject'
import { withRouter, Route } from 'react-router-dom'
import Typography from 'material-ui/Typography'
import List, { ListItem } from 'material-ui/List'
import Button from 'material-ui/Button'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import Link from './Link'

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '[list] 25% [main] auto',
    gridTemplateRows: '100%',
    height: '100%',
    width: '100%'
  },
  list: {
    gridColumn: 'list',
    overflowY: 'auto',
    height: '100%'
  },
  main: {
    gridColumn: 'main',
    overflowY: 'auto',
    height: '100%'
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
    tableLayout: 'fixed'
  },
  platformDisplay: {
    padding: 10
  }

}

const GithubLink = 'https://github.com/SnowflakePowered/stone/blob/master/controller/'
const ControllerDisplay = ({ controller, platforms, classes }) => {
  return (
    <div>
      <div className={classes.header}>
        <Typography type="headline">{controller.FriendlyName}</Typography>
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
                <Typography>
                  <pre>{controller.LayoutID}</pre>
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography type="caption">Friendly Name</Typography>
              </TableCell>
              <TableCell>
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
                  <TableCell>{v.Label}</TableCell>
                  <TableCell>{k}</TableCell>
                  <TableCell>{v.Type}</TableCell>
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
                  <TableCell>
                    <Typography>{p.FriendlyName}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      <Link to={`/defs/platforms/${p.PlatformID}`}>
                        <Button raised accent>See Details</Button>
                      </Link>
                    </Typography>
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

const ControllerList = ({ controllers, platforms, match, classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <List>
          {Object.values(controllers).map(c =>
            <Link to={`${match.url}/${c.LayoutID}`}>
              <ListItem button>{c.FriendlyName}</ListItem>
            </Link>)}
        </List>
      </div>
      <div className={classes.main}>
        <Route exact path={`${match.url}`} render={() =>
          <div className={classes.controllerDisplay}>
            <Typography>Please select a controller display.</Typography>
          </div>
        } />
        <Route path={`${match.url}/:layoutId`} render={({ match }) => {
          if (controllers[match.params.layoutId] !== undefined) {
            return (
              <div>
                <ControllerDisplay classes={classes} platforms={platforms} controller={controllers[match.params.layoutId]} />
              </div>
            )
          } else {
            return (
              <div className={classes.controllerDisplay}>
                <Typography>Please select a controller display.</Typography>
              </div>
            )
          }
        }
        } />
      </div>
    </div>
  )
}

export default injectSheet(styles)(withRouter(ControllerList))

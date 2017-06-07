// @ts-nocheck
import React from 'react'

import injectSheet from 'mui-jss-inject'
import { withRouter, Route } from 'react-router-dom'
import Typography from 'material-ui/Typography'
import List, { ListItem } from 'material-ui/List'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import Link from './Link'
import Button from 'material-ui/Button'
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
    height: '100%',
    position: 'relative'
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
  main: {
    gridColumn: 'main',
    overflowY: 'auto',
    height: '100%',
    width: '100%'
  },
  paper: {
    margin: [32, 32]
  },
  paperHeader: {
    padding: [0, 24],
    paddingTop: 12
  },
  platformDisplay: {
    padding: 10,
    display: 'flex',
    alignItems: 'center'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 32
  },
  table: {
    tableLayout: 'fixed',
    overflowX: 'auto'
  },
  tableCell: {
    overflowX: 'auto',
    paddingRight: 10
  },
  headline: {
    width: '80%'
  }
}

const GithubLink = 'https://github.com/SnowflakePowered/stone/blob/master/platform/'

const PlatformDisplay = ({ platform, classes, drawerDocked, handleDrawerToggle }) => (
  <div>
    <div className={classes.header}>
      <Typography className={classes.headline} type="headline">{platform.FriendlyName}</Typography>
      <MenuButton drawerDocked={drawerDocked} handleDrawerToggle={handleDrawerToggle} />
      <Link extern to={GithubLink + `${platform.PlatformID}.yml`}><Button>Edit on GitHub</Button></Link>
    </div>
    <Paper className={classes.paper}>
      <Typography className={classes.paperHeader} type="title" bold>Platform</Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell compact className={classes.tableCell}><Typography type="caption">Stone Platform ID</Typography></TableCell>
            <TableCell compact className={classes.tableCell}><Typography><pre>{platform.PlatformID}</pre></Typography></TableCell>
          </TableRow>
          <TableRow>
            <TableCell compact className={classes.tableCell}><Typography type="caption">Friendly Name</Typography></TableCell>
            <TableCell compact className={classes.tableCell}><Typography>{platform.FriendlyName}</Typography></TableCell>
          </TableRow>
          <TableRow>
            <TableCell compact className={classes.tableCell}><Typography type="caption">Maximum Inputs</Typography></TableCell>
            <TableCell compact className={classes.tableCell}><Typography><pre>{platform.MaximumInputs}</pre></Typography></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>

    <Paper className={classes.paper}>
      <Typography className={classes.paperHeader} type="title">Metadata</Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Metadata Key</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(platform.Metadata).map(([k, v]) =>
            <TableRow key={k}>
              <TableCell compact className={classes.tableCell}><Typography type="caption">{k}</Typography></TableCell>
              <TableCell compact className={classes.tableCell}><Typography>{v}</Typography></TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </Paper>

    <Paper className={classes.paper}>
      <Typography className={classes.paperHeader} type="title">Content-Types</Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>File Extension</TableCell>
            <TableCell>Content-Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(platform.FileTypes).map(([k, v]) =>
            <TableRow key={k}>
              <TableCell compact className={classes.tableCell}><Typography type="caption">{k}</Typography></TableCell>
              <TableCell compact className={classes.tableCell}><Typography><pre>{v}</pre></Typography></TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </Paper>

    {(platform.BiosFiles
      ? <Paper className={classes.paper}>
        <Typography className={classes.paperHeader} type="title">BIOS Files</Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>File Name</TableCell>
              <TableCell>Known Hashes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(platform.BiosFiles || []).map(([k, v]) =>
              <TableRow key={k}>
                <TableCell compact className={classes.tableCell}><Typography>{k}</Typography></TableCell>
                <TableCell compact className={classes.tableCell}>{v.map(hash => <pre>{hash}</pre>)}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Paper>
      : '')}
  </div>
)

const MenuButton = ({ drawerDocked, handleDrawerToggle }) => {
  if (!drawerDocked) {
    return (<Button onClick={handleDrawerToggle}>Select a Platform</Button>)
  } else {
    return <div />
  }
}

class PlatformList extends React.Component {
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
    const { platforms, match, classes, width } = this.props
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
              {Object.values(platforms).map(p =>
                <Link to={`${match.url}/${p.PlatformID}`}>
                  <ListItem button>{p.FriendlyName}</ListItem>
                </Link>)}
            </List>
          </Drawer>
        </div>
        <div className={classes.main}>
          <Route exact path={`${match.url}`} render={() =>
            <div className={classes.platformDisplay}>
              <MenuButton drawerDocked={drawerDocked} handleDrawerToggle={this.handleDrawerToggle} />
            </div>
          } />
          <Route path={`${match.url}/:platformId`} render={({ match }) => {
            if (platforms[match.params.platformId] !== undefined) {
              return (<PlatformDisplay
                drawerDocked={drawerDocked}
                handleDrawerToggle={this.handleDrawerToggle}
                classes={classes}
                platform={platforms[match.params.platformId]} />)
            } else {
              return (
                <div className={classes.platformDisplay}>
                  <MenuButton drawerDocked={drawerDocked} handleDrawerToggle={this.handleDrawerToggle} />
                </div>)
            }
          }} />
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(withWidth()(withRouter(PlatformList)))

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
  paper: {
    margin: [32, 32]
  },
  paperHeader: {
    padding: [0, 24],
    paddingTop: 12
  },
  platformDisplay: {
    padding: 10
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 32
  },
  table: {
    tableLayout: 'fixed'
  }
}

const GithubLink = 'https://github.com/SnowflakePowered/stone/blob/master/platform/'

const PlatformDisplay = ({ platform, classes }) => (
  <div>
    <div className={classes.header}>
      <Typography type="headline">{platform.FriendlyName}</Typography>
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
            <TableCell><Typography type="caption">Stone Platform ID</Typography></TableCell>
            <TableCell><Typography><pre>{platform.PlatformID}</pre></Typography></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Typography type="caption">Friendly Name</Typography></TableCell>
            <TableCell><Typography>{platform.FriendlyName}</Typography></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Typography type="caption">Maximum Inputs</Typography></TableCell>
            <TableCell><Typography><pre>{platform.MaximumInputs}</pre></Typography></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>

    <Paper className={classes.paper}>
      <Typography className={classes.paperHeader} type="title" bold>Metadata</Typography>
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
              <TableCell><Typography type="caption">{k}</Typography></TableCell>
              <TableCell><Typography>{v}</Typography></TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </Paper>

    <Paper className={classes.paper}>
      <Typography className={classes.paperHeader} type="title" bold>Content-Types</Typography>
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
              <TableCell><Typography type="caption">{k}</Typography></TableCell>
              <TableCell><Typography><pre>{v}</pre></Typography></TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </Paper>

    {(platform.BiosFiles
      ? <Paper className={classes.paper}>
        <Typography className={classes.paperHeader} type="title" bold>Content-Types</Typography>
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
                <TableCell><Typography>{k}</Typography></TableCell>
                <TableCell>{v.map(hash => <pre>{hash}</pre>)}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Paper>
      : '')}
  </div>
)

const PlatformList = ({ platforms, match, classes }) => (
  <div className={classes.container}>
    <div className={classes.list}>
      <List>
        {Object.values(platforms).map(p =>
          <Link to={`${match.url}/${p.PlatformID}`}>
            <ListItem button>{p.FriendlyName}</ListItem>
          </Link>)}
      </List>
    </div>
    <div className={classes.main}>
      <Route exact path={`${match.url}`} render={() =>
        <div className={classes.platformDisplay}>
          <Typography>Please select a platform.</Typography>
        </div>
      } />
      <Route path={`${match.url}/:platformId`} render={({ match }) => {
        if (platforms[match.params.platformId] !== undefined) {
          return (<PlatformDisplay classes={classes} platform={platforms[match.params.platformId]} />)
        } else {
          return (
            <div className={classes.platformDisplay}>
              <Typography>Please select a platform.</Typography>
            </div>)
        }
      }} />
    </div>
  </div>
)

export default injectSheet(styles)(withRouter(PlatformList))

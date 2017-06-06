import React from 'react'

import injectSheet from 'mui-jss-inject'
import { withRouter } from 'react-router-dom'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListSubheader } from 'material-ui/List'

import { Route } from 'react-router-dom'
import Link from './Link'
const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '[list] 25% [main] auto',
        overflowY: 'hidden',
        height: '100vh'
    },
    list: {
        gridColumn: 'list',
        overflowY: 'auto'
    },
    main: {
        gridColumn: 'main',
        padding: 10
    }

}

const PlatformDisplay = ({platform}) => (
    <div>
        <Typography type="headline">{platform.FriendlyName}</Typography>
        <Typography type="caption">{platform.PlatformID}</Typography>
        <Typography type="caption">Maximum Inputs: {platform.MaximumInputs}</Typography>
        <div>
            <Typography type="subheading">Metadata</Typography>
            {Object.entries(platform.Metadata).map(([k, v]) => 
            <div>
                <Typography>{v}</Typography>
                <Typography type="caption">{k}</Typography>
            </div>)}
        </div>

        <div>
            <Typography type="subheading">Content-Types</Typography>
            {Object.entries(platform.FileTypes).map(([k, v]) => 
            <div>
                <Typography>{k}</Typography>
                <Typography type="caption">{v}</Typography>
            </div>)}
        </div>

        <div>
            <Typography type="subheading">BIOS files</Typography>
            {Object.entries(platform.BiosFiles || []).map(([k, v]) => 
            <div>
                <Typography>{k}</Typography>
                {v.map(hash => <Typography type="caption">{hash}</Typography>)}
            </div>)}
        </div>
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
                <Typography>Please select a platform.</Typography>
            } />
            <Route path={`${match.url}/:platformId`} render={({match}) =>
                <div>
                    <PlatformDisplay platform={platforms[match.params.platformId]}/>
                </div>
            } />
        </div>
    </div>
)



export default injectSheet(styles)(withRouter(PlatformList))
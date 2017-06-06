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


const ControllerList = ({ controllers, match, classes }) => (
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
                <Typography>Please select a controller layout.</Typography>
            } />
            <Route path={`${match.url}/:layoutId`} render={({match}) =>
                <div>
                    {controllers[match.params.layoutId].FriendlyName}
                </div>
            } />
        </div>
    </div>
)



export default injectSheet(styles)(withRouter(ControllerList))
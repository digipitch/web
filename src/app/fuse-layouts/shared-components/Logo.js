import React from 'react';
import {Typography, withStyles} from '@material-ui/core';
import classNames from 'classnames';

const styles = theme => ({
    root      : {
        '& .logo-icon': {
            width     : 24,
            height    : 24,
            transition: theme.transitions.create(['width', 'height'], {
                duration: theme.transitions.duration.shortest,
                easing  : theme.transitions.easing.easeInOut
            })
        }
    },
    reactBadge: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        color          : '#61dafb'
    }
});

function Logo({classes})
{
    return (
        <div className={classNames(classes.root, "flex items-center")}>
            <img className="logo-icon" src="assets/images/logos/dp-logo-white.svg" alt="Digipitch"/>
            <Typography className="text-16 ml-12 font-light logo-text">Digipitch</Typography>

        </div>
    );
}

export default withStyles(styles, {withTheme: true})(Logo);

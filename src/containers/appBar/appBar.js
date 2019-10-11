import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Button,
} from '@material-ui/core';
import { MoreVert, Publish, GetApp } from '@material-ui/icons';

import { mapDispatch, mapState } from './appBar.controller';

const styles = theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});

class AppBarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorEl: null,
    };
  }

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleClose = url => {
    this.setState({ open: false, anchorEl: null }, () => {
      if (url) this.props.history.push(url);
    });
  };

  renderTopAppBar = classes => {
    return (
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={e => this.handleClick(e)}
          >
            <MoreVert />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            BPR Dalung
          </Typography>
          <Button color="inherit">
            <Publish /> Import
          </Button>
          <Button color="inherit">
            <GetApp />
            Export
          </Button>
        </Toolbar>
      </AppBar>
    );
  };

  renderNavOptions = () => {
    const { open, anchorEl } = this.state;
    return (
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: 200,
          },
        }}
        onClose={() => this.handleClose(null)}
      >
        <MenuItem selected>Home</MenuItem>
      </Menu>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.renderTopAppBar(classes)}
        {this.renderNavOptions()}
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(AppBarComponent));

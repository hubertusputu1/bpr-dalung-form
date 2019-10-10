import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentLoader from 'react-content-loader';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Paper,
  useScrollTrigger,
  Slide,
  Button,
  TextField,
  MenuItem,
  Menu,
} from '@material-ui/core';
import { MoreVert, NavigateBefore, NavigateNext } from '@material-ui/icons';

import { mapDispatch, mapState } from './home.controller';

import AppBarComponent from '../appBar';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 50,
    color: 'primary',
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingTop: 50,
    paddingBottom: 50,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: props.currentPage,
      open: false,
      anchorEl: null,
    };
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  componentDidMount = () => {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBarComponent />
        <Paper square className={classes.paper}></Paper>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(Home));

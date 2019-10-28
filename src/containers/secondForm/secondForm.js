import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentLoader from 'react-content-loader';
import { withStyles } from '@material-ui/core/styles';
import {
  Radio,
  RadioGroup,
  Toolbar,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Typography,
  Paper,
  Button,
  TextField,
} from '@material-ui/core';
import { MoreVert, NavigateBefore, NavigateNext } from '@material-ui/icons';

import { mapDispatch, mapState } from './secondForm.controller';
import FirstSection from './firstSection';
import SecondSection from './secondSection';

import AppBarComponent from '../appBar';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: 'primary',
    width: '80%',
  },
  text: {
    textAlign: 'center',
  },
  body: {
    width: '70%',
    margin: 'auto',
    paddingBottom: 50,
  },
  title: {
    width: '70%',
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  formRadio: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formControl: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  bodyFooter: {
    width: '70%',
    margin: 'auto',
    height: 50,
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  section: {
    marginTop: theme.spacing(2),
  },
});

class SecondForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};

  renderForm = classes => {
    return (
      <div>
        <FirstSection classesParent={classes} />
        <SecondSection classesParent={classes} />
      </div>
    );
  };

  renderBodyFooter = classes => {
    return (
      <Button
        style={{ width: 100 }}
        color="default"
        onClick={() => console.log('hello')}
      >
        Next
      </Button>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBarComponent />
        <Toolbar />
        <div className={classes.body}>{this.renderForm(classes)}</div>
        <Paper square className={classes.bodyFooter}>
          {this.renderBodyFooter(classes)}
        </Paper>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(withStyles(styles)(SecondForm));

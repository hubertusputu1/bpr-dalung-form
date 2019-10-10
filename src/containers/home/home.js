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

import { mapDispatch, mapState } from './home.controller';

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
    marginTop: 10,
    height: 50,
    display: 'flex',
    flexDirection: 'row-reverse',
  },
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cif: '',
      noRekening: '',
      nasabah: '',
      hubunganBank: '',
      bertindakSbg: '',
      wakilLain: '',
    };
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  componentDidMount = () => {};

  renderTitle = classes => {
    return (
      <div className={classes.title}>
        <Typography className={classes.text} variant="h6">
          FORMULIR APLIKASI PERMBUKAAN REKENING
        </Typography>
        <Typography className={classes.text} variant="h6">
          NON PERORANGAN
        </Typography>
      </div>
    );
  };

  renderForm = classes => {
    const {
      cif,
      noRekening,
      nasabah,
      hubunganBank,
      bertindakSbg,
      wakilLain,
    } = this.state;
    return (
      <div className={classes.form}>
        <TextField
          id="nomer-cif"
          label="Nomer CIF"
          className={classes.textField}
          value={cif}
          onChange={this.handleChange('cif')}
          margin="normal"
        />
        <TextField
          id="nomer-rekening"
          label="Nomer Rekening Baru"
          className={classes.textField}
          value={noRekening}
          onChange={this.handleChange('noRekening')}
          margin="normal"
        />
        <div className={classes.formRadio}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Nasabah</FormLabel>
            <RadioGroup
              aria-label="Nasabah"
              name="nasabah"
              value={nasabah}
              onChange={this.handleChange('nasabah')}
            >
              <FormControlLabel value="baru" control={<Radio />} label="Baru" />
              <FormControlLabel
                value="existing"
                control={<Radio />}
                label="Existing"
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Hubungan Dengan Bank</FormLabel>
            <RadioGroup
              aria-label="Hubungan-Dengan-Bank"
              name="hubunganBank"
              value={hubunganBank}
              onChange={this.handleChange('hubunganBank')}
            >
              <FormControlLabel
                value="terkait"
                control={<Radio />}
                label="Terkait"
              />
              <FormControlLabel
                value="tidak terkait"
                control={<Radio />}
                label="Tidak Terkait"
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              Dalam Hal Ini Bertindak Sebagai
            </FormLabel>
            <RadioGroup
              aria-label="bertidak-sebagai"
              name="bertindakSbg"
              value={bertindakSbg}
              onChange={this.handleChange('bertindakSbg')}
            >
              <FormControlLabel
                value="pribadi"
                control={<Radio />}
                label="pribadi"
              />
              <FormControlLabel
                value="lain"
                control={<Radio />}
                label="wakil dari pihak lain"
              />
              {this.state.bertindakSbg === 'lain' && (
                <TextField
                  id="wakil-lain"
                  label="Atas Nama"
                  className={classes.textField}
                  value={wakilLain}
                  onChange={this.handleChange('wakilLain')}
                  margin="normal"
                />
              )}
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
  };

  renderBodyFooter = classes => {
    return (
      <Button style={{ width: 100 }} color="default">
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
        {this.renderTitle(classes)}
        <Paper square className={classes.body}>
          {this.renderForm(classes)}
        </Paper>
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
)(withStyles(styles)(Home));

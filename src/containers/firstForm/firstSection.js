import React, { Component } from 'react';
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

const styles = theme => ({});

class FirstSection extends Component {
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

  renderSection = classes => {
    const {
      cif,
      noRekening,
      nasabah,
      hubunganBank,
      bertindakSbg,
      wakilLain,
    } = this.state;

    return (
      <Paper className={classes.section}>
        <div className={classes.title}>
          <Typography className={classes.text} variant="h6">
            FORMULIR APLIKASI PERMBUKAAN REKENING
          </Typography>
          <Typography className={classes.text} variant="h6">
            Non Perorangan
          </Typography>
        </div>
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
                <FormControlLabel
                  value="baru"
                  control={<Radio />}
                  label="Baru"
                />
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
                {bertindakSbg === 'lain' && (
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
      </Paper>
    );
  };

  render() {
    const { classesParent } = this.props;
    return this.renderSection(classesParent);
  }
}

export default withStyles(styles)(FirstSection);

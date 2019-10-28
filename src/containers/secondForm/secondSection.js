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

class SecondSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jenis: '',
      jenisLainnya: '',
      nama: '',
      alamat: '',
      kodePos: '',
      Kota: '',
      negara: '',
      noHp: '',
      noKantor: '',
      noTelpLainnya: '',
      email: '',
      statusPerusahaan: '',
      bidangUsaha: '',
      laporanKeuangan: '',
      noAkta: '',
      tempatPendirian: '',
      tanggalTerbit: '',
      noPerubahanAkta: '',
      tempatPendirianPerubahan: '',
      tanggalTerbitPerubahan: '',
      noSIUP: '',
      tempatPendirianSIUP: '',
      tanggalTerbitSIUP: '',
      noSITU: '',
      tempatPendirianSITU: '',
      tanggalTerbitSITU: '',
      noTDP: '',
      tempatPendirianTDP: '',
      tanggalTerbitTDP: '',
      noLain: '',
      tempatPendirianLain: '',
      tanggalTerbitLain: '',
    };
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  renderSection = classes => {
    const {
      jenis,
      jenisLainnya,
      nama,
      alamat,
      kodePos,
      kota,
      negara,
      noHp,
      noKantor,
      noTelpLainnya,
      email,
      statusPerusahaan,
      bidangUsaha,
      laporanKeuangan,
      noAkta,
      tempatPendirian,
      tanggalTerbit,
      noPerubahanAkta,
      tempatPendirianPerubahan,
      tanggalTerbitPerubahan,
      noSIUP,
      tempatPendirianSIUP,
      tanggalTerbitSIUP,
      noSITU,
      tempatPendirianSITU,
      tanggalTerbitSITU,
      noTDP,
      tempatPendirianTDP,
      tanggalTerbitTDP,
      noLain,
      tempatPendirianLain,
      tanggalTerbitLain,
    } = this.state;

    return (
      <Paper className={classes.section}>
        <div className={classes.title}>
          <Typography className={classes.text} variant="h6">
            Data Nasabah Non Perorangan / Badan Usaha
          </Typography>
        </div>
        <div className={classes.form}>
          <div className={classes.formRadio}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">
                Dalam Hal Ini Bertindak Sebagai
              </FormLabel>
              <RadioGroup
                aria-label="bertidak-sebagai"
                name="jenis"
                value={jenis}
                onChange={this.handleChange('jenis')}
                row
              >
                <FormControlLabel
                  value="PT/CV"
                  control={<Radio />}
                  label="PT/CV"
                />
                <FormControlLabel
                  value="Bank"
                  control={<Radio />}
                  label="Bank"
                />
                <FormControlLabel
                  value="Yayasan/Perkumpulan/Koperasi"
                  control={<Radio />}
                  label="Yayasan/Perkumpulan/Koperasi"
                />
                <FormControlLabel
                  value="lainnya"
                  control={<Radio />}
                  label="lainnya"
                />
                {jenis === 'lainnya' && (
                  <TextField
                    id="lainnya"
                    label="Lainnya"
                    className={classes.textField}
                    value={jenisLainnya}
                    onChange={this.handleChange('jenisLainnya')}
                    margin="normal"
                  />
                )}
              </RadioGroup>
            </FormControl>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '80%',
              marginBottom: 30,
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
              }}
            >
              <TextField
                id="nama"
                label="Nama Perusahaan/Instansi"
                className={classes.textField}
                value={nama}
                onChange={this.handleChange('nama')}
                margin="normal"
              />
              <TextField
                id="alamat"
                label="Alamat Perusahaan/Instansi"
                className={classes.textField}
                value={alamat}
                onChange={this.handleChange('alamat')}
                margin="normal"
              />
              <TextField
                id="kodePos"
                label="Kode Pos"
                className={classes.textField}
                value={kodePos}
                onChange={this.handleChange('kodePos')}
                margin="normal"
              />
              <TextField
                id="kota"
                label="Kota"
                className={classes.textField}
                value={kota}
                onChange={this.handleChange('kota')}
                margin="normal"
              />
              <TextField
                id="negara"
                label="Negara Asal"
                className={classes.textField}
                value={negara}
                onChange={this.handleChange('negara')}
                margin="normal"
              />
              <TextField
                id="noHp"
                label="No. Handphone/Seluler"
                className={classes.textField}
                value={noHp}
                onChange={this.handleChange('noHp')}
                margin="normal"
              />
              <TextField
                id="nomer-kantor"
                label="No. Telp. Kantor"
                className={classes.textField}
                value={noKantor}
                onChange={this.handleChange('noKantor')}
                margin="normal"
              />
              <TextField
                id="no-lainnya"
                label="No. Telp. Lainnya"
                className={classes.textField}
                value={noTelpLainnya}
                onChange={this.handleChange('noTelpLainnya')}
                margin="normal"
              />
              <TextField
                id="email"
                label="Email"
                className={classes.textField}
                value={email}
                onChange={this.handleChange('email')}
                margin="normal"
              />
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">
                  Dalam Hal Ini Bertindak Sebagai
                </FormLabel>
                <RadioGroup
                  aria-label="Status Perusahaan"
                  name="Status Perusahaan"
                  value={statusPerusahaan}
                  onChange={this.handleChange('statusPerusahaan')}
                  row
                >
                  <FormControlLabel
                    value="Cabang"
                    control={<Radio />}
                    label="Cabang"
                  />
                  <FormControlLabel
                    value="Pusat"
                    control={<Radio />}
                    label="Pusat"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                id="bidang-usaha"
                label="Bidang Usaha"
                className={classes.textField}
                value={bidangUsaha}
                onChange={this.handleChange('bidangUsaha')}
                margin="normal"
              />
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">
                  Dalam Hal Ini Bertindak Sebagai
                </FormLabel>
                <RadioGroup
                  aria-label="Laporan Keuangan"
                  name="Laporan Keuangan"
                  value={laporanKeuangan}
                  onChange={this.handleChange('laporanKeuangan')}
                  row
                >
                  <FormControlLabel
                    value="Ada"
                    control={<Radio />}
                    label="Ada"
                  />
                  <FormControlLabel
                    value="Tidak Ada"
                    control={<Radio />}
                    label="Tidak Ada"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                id="akta-pendirian-no"
                label="Akta Pendirian No."
                className={classes.textField}
                value={noAkta}
                onChange={this.handleChange('noAkta')}
                margin="normal"
              />
              <TextField
                id="Tempat-Pendirian"
                label="Tempat Pendirian"
                className={classes.textField}
                value={tempatPendirian}
                onChange={this.handleChange('tempatPendirian')}
                margin="normal"
              />
              <TextField
                id="tanggal-terbit"
                label="Tanggal Terbit"
                type="date"
                style={{ marginTop: 20 }}
                value={tanggalTerbit}
                onChange={this.handleChange('tanggalTerbit')}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
              }}
            >
              <TextField
                id="akta-perubahan-terakhir"
                label="Akta Perubahan Terakhir No."
                className={classes.textField}
                value={noPerubahanAkta}
                onChange={this.handleChange('noPerubahanAkta')}
                margin="normal"
              />
              <TextField
                id="tempat-pendirian-terakhir"
                label="Tempat Pendirian"
                className={classes.textField}
                value={tempatPendirian}
                onChange={this.handleChange('tempatPendirian')}
                margin="normal"
              />
              <TextField
                style={{ marginTop: 20 }}
                id="tanggal-terbit-terakhir"
                label="Tanggal Terbit"
                type="date"
                value={tanggalTerbitPerubahan}
                onChange={this.handleChange('tanggalTerbitPerubahan')}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="SIUP-no"
                label="SIUP No."
                className={classes.textField}
                value={noSIUP}
                onChange={this.handleChange('noSIUP')}
                margin="normal"
              />
              <TextField
                id="tempat-pendirian-SIUP"
                label="Tempat Pendirian"
                className={classes.textField}
                value={tempatPendirianSIUP}
                onChange={this.handleChange('tempatPendirianSIUP')}
                margin="normal"
              />
              <TextField
                id="tanggal-terbit-SIUP"
                label="Tanggal Terbit"
                type="date"
                style={{ marginTop: 20 }}
                value={tanggalTerbitSIUP}
                onChange={this.handleChange('tanggalTerbitSIUP')}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="akta-perubahan-SITU"
                label="SITU No."
                className={classes.textField}
                value={noSITU}
                onChange={this.handleChange('noSITU')}
                margin="normal"
              />
              <TextField
                id="tempat-pendirian-SITU"
                label="Tempat Pendirian"
                className={classes.textField}
                value={tempatPendirianSITU}
                onChange={this.handleChange('tempatPendirianSITU')}
                margin="normal"
              />
              <TextField
                id="tanggal-terbit-SITU"
                label="Tanggal Terbit"
                type="date"
                style={{ marginTop: 20 }}
                value={tanggalTerbitSITU}
                onChange={this.handleChange('tanggalTerbitSITU')}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="akta-perubahan-TDP"
                label="TDP No."
                className={classes.textField}
                value={noTDP}
                onChange={this.handleChange('noTDP')}
                margin="normal"
              />
              <TextField
                id="tempat-pendirian-TDP"
                label="Tempat Pendirian"
                className={classes.textField}
                value={tempatPendirianTDP}
                onChange={this.handleChange('tempatPendirianTDP')}
                margin="normal"
              />
              <TextField
                id="tanggal-terbit-TDP"
                label="Tanggal Terbit"
                type="date"
                style={{ marginTop: 20 }}
                value={tanggalTerbitTDP}
                onChange={this.handleChange('tanggalTerbitTDP')}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="akta-perubahan-lainnya"
                label="Ijin Lainnya"
                className={classes.textField}
                value={noLain}
                onChange={this.handleChange('noLain')}
                margin="normal"
              />
              <TextField
                id="tempat-pendirian-lainnya"
                label="Tempat Pendirian"
                className={classes.textField}
                value={tempatPendirianLain}
                onChange={this.handleChange('tempatPendirianLain')}
                margin="normal"
              />
              <TextField
                id="tanggal-terbit-lainnya"
                label="Tanggal Terbit"
                type="date"
                style={{ marginTop: 20 }}
                value={tanggalTerbitLain}
                onChange={this.handleChange('tanggalTerbitLain')}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
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

export default withStyles(styles)(SecondSection);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
} from '@material-ui/core';

import FirstForm from './containers/firstForm';
import NotFoundPage from './containers/notFoundPage';

const theme = createMuiTheme({
  // palette: {
  //   type: 'dark',
  // },
  typography: { useNextVariants: true },
});

class App extends Component {
  renderFirstForm = props => {
    return <FirstForm {...props} />;
  };

  renderNotFoundPage = () => {
    return <NotFoundPage />;
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={props => this.renderFirstForm(props)}
              />
              <Route render={props => this.renderNotFoundPage()} />
            </Switch>
          </Router>
        </CssBaseline>
      </MuiThemeProvider>
    );
  }
}

export default connect(
  state => {
    return {};
  },
  dispatchEvent => {
    return {};
  }
)(App);

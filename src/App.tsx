import React from 'react';
import {IntlProvider} from 'react-intl'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import messages from './i18n/en';
import Layout from './containers/Layout';
import Applications from './containers/Applications';
import Paper from './components/Paper';


function App() {
  return (
    <IntlProvider messages={messages} locale="" defaultLocale="en">
      <Router>
        <Layout>
          <Switch>
            <Paper>
              <Route path="/">
                <Applications/>
              </Route>
            </Paper>
          </Switch>
        </Layout>
      </Router>
    </IntlProvider>
  );
}

export default App;

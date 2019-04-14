import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import SimplySquare from './components/tasks/play1/Play1'

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/SimplySquare" component={SimplySquare} />
      <Route path="/play2" component={SimplySquare} />
      <Route path="/play3" component={SimplySquare} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

if (module.hot) {
  module.hot.dispose(function () {
    // module is about to be replaced
  });
  module.hot.accept(function () {
    // module or one of its dependencies was just updated
  });
}
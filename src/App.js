import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StyleGuide from '@views/StyleGuide';
import Login from '@views/Login'
import Main from '@views/Main'
import Record from '@views/Record'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route path='/StyleGuide' component={StyleGuide} />
        <Route path='/Main' component={Main} />
        <Route path='/Record' component={Record} />
      </Router>
    </div>
  );

};


export default App;
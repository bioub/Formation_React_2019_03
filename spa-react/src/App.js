import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { Contact } from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/contacts">Contacts</Link>
        {/* <Switch> */}
          <Route path="/contacts" component={Contact} />
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { ContactShow } from './ContactShow';

class Contact extends Component {
  render() {
    const currentPath = this.props.match.path;

    return (
      <div className="Contact" style={{display: 'flex'}}>
        <div>
          <Link to={currentPath + "/add"}>Ajouter</Link>
          <ContactList />
        </div>
        <div>
          <Route path={currentPath + "/add"} component={ContactForm} />
          <Route path={currentPath + "/:id"} component={ContactShow} />
        </div>
      </div>
    );
  }
}

export {
  Contact,
};

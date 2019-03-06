import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ContactList extends Component {
  state = {
    loading: true,
    contacts: [],
  }
  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const contacts = await res.json();
    this.setState({
      loading: false,
      contacts
    })
  }
  render() {
    const jsxContacts = this.state.contacts.map((c) => <div key={c.id}><Link to={'/contacts/' + c.id}>{c.name}</Link></div>);
    return (
      <div className="ContactList">
        {this.state.loading ? <div>Loading...</div> : jsxContacts}
      </div>
    );
  }
}

export {
  ContactList,
};

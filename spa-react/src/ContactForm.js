import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    prenom: '',
    nom: '',
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <form className="ContactForm">
        <div>
          Prénom :
          <input name="prenom" value={this.state.prenom} onChange={this.handleChange} />
        </div>
        <div>
          Nom :
          <input name="nom" value={this.state.nom} onChange={this.handleChange} />
        </div>
        <div>
          <button>Ajouter</button>
        </div>
      </form>
    );
  }
}

export {
  ContactForm,
}
import React, { Component } from 'react'
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class Contact extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
      };
  

  render() {

  return (
    <div className="container">
    <form>
      <div className="input-field col s6">
          <input id="name" type="text" className="validate"></input>
          <label for="name">Name</label>
        </div>
      <div className="mb-3 pt-0">
      <div className="input-field col s6">
          <input id="email" type="text" className="validate"></input>
          <label for="email">Email</label>
        </div>
      </div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea id="textarea1" className="materialize-textarea"></textarea>
              <label for="textarea1">Message Here...</label>
            </div>
          </div>
        </form>
      </div>
      <div className="mb-3 pt-0">
        <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Submit</a>
          <div id="modal1" className="modal">
            <div className="modal-content">
              <h4>Thanks!</h4>
              <p>We'll be in contact soon.</p>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div>
        </div>
    </form>
    </div>
  );
};
}

export default Contact;
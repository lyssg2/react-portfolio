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
      <div class="input-field col s6">
          <input id="name" type="text" class="validate"></input>
          <label for="name">Name</label>
        </div>
      <div className="mb-3 pt-0">
      <div class="input-field col s6">
          <input id="email" type="text" class="validate"></input>
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea"></textarea>
              <label for="textarea1">Message Here...</label>
            </div>
          </div>
        </form>
      </div>
      <div className="mb-3 pt-0">
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Submit</a>
          <div id="modal1" class="modal">
            <div class="modal-content">
              <h4>Thanks!</h4>
              <p>We'll be in contact soon.</p>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div>
        </div>
    </form>
    </div>
  );
};
}

export default Contact;
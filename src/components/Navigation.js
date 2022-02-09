import React, { Component } from 'react'
import { Link } from "react-router-dom"
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

const styles = {
    navStyle: {
        backgroundColor: '#ff8f00',
    }
}

class Navigation extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
render() {
    return (
        <header>
            <nav style={styles.navStyle}>
                <div className="nav-wrapper">
                <a href="#!" class="brand-logo">Lyss Garcia</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Skills">Skills</Link></li>
                        <li><Link to="/Work">Work</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
            <li><Link to="/About">About</Link></li>
                        <li><Link to="/Skills">Skills</Link></li>
                        <li><Link to="/Work">Work</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
  </ul>
        </header>
    )  
}
}

export default Navigation;
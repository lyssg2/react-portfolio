import React, { Component } from 'react'
import { Link } from "react-router-dom"
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

const styles = {
    navStyle: {
        backgroundColor: 'black',
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
                <a href="/" class="brand-logo center">Hi, I'm Lyss</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                        <li><a href="/about">About</a></li>
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
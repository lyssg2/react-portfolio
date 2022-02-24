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
                        <h6 className="brand-logo center">Hi, I'm Lyss</h6>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Skills">Skills</Link></li>
                            <li><Link to="/Work">Work</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/">Home</Link></li>
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
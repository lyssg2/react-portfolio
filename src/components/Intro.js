import React from 'react';
import { Link } from "react-router-dom"
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';


const styles = {
    helloImg: {
        margin: '40px 0 200px 0',
    },
    msgStyle: {
        margin: '100px 0 200px 0', 
    }
}

export default function Intro() {
  return (
        <div className="section" id="introduction">
            <div className="row container">
                <div className="col s6">
                    <img style={styles.helloImg} src={require("../assets/images/selfie.JPEG")} className="responsive-img" id="hello-img" alt="Lyss Garcia, Web Developer"></img>
                </div>
                <div style={styles.msgStyle} class="col s6">
                    <h5>Welcome. Click the links above to get to know me and my work. Let's create something cool together.
                    </h5>
                </div>
            </div>
        </div>
        
  );
}


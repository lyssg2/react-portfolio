import React from 'react'
import 'materialize-css/dist/css/materialize.min.css';

const styles = {
    logoStyles: {
        height: "50px",
        width: "50px"
    }
}

function Footer() {
    return (
        <footer className="page-footer white">
        <div className="footer-copyright">
            <div className="container">
                <p className="black-text">© 2022 LGG </p>
                <div className="row center">
                    <a href="https://github.com/lyssg2"><img style={styles.logoStyles} src={require("../assets/images/github.png")}></img></a>
                    <a href="https://www.linkedin.com/in/lyss-garcia-6a480a155/"><img style={styles.logoStyles} src={require("../assets/images/linkedin.png")}></img></a>
                </div>           
            </div>
        </div>
    </footer>
          
    );
  }
  
  export default Footer;
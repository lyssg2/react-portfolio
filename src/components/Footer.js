import React from 'react'

const styles = {
    logoStyles: {
        height: "50px",
        width: "50px",
        marginTop: 20,
        marginBottom: 0,
    }
}

function Footer() {
    return (
        <footer>
            <div className="footer-copyright">
                <div className="container">
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
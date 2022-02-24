import React from 'react'
import 'materialize-css/dist/css/materialize.min.css';

const styles = {
    imgStyle: {
        width: '80%',
        height: '200px',
    },
    boxStyle: {
        justifyContent: 'center',
    }
}

function Work() {
    return (
        <div className="container">
            <div className="row center-align">
            <h3>Check out some of my code</h3>
            <div className="col s6">
                    <div className="card large z-depth-4">
                        <div className="card-content">
                            <span className="card-title">extracted.</span>
                            <div className="valign-wrapper" style={styles.boxStyle}>
                                <img style={styles.imgStyle} src={require("../assets/images/coffeebackground.jpg")} className="responsive-img" id="card-img"></img>
                            </div>
                            <div className="card-content">
                                <p>A website connecting the coffee lover to the best coffee shops in the PNW.</p>
                            </div>
                            <div className="card-action">
                                <a href="https://extracted-coffee.herokuapp.com/">See it Live</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s6" id="card-box">
                    <div className="card large z-depth-4">
                        <div className="card-content">
                            <span className="card-title">Cocktail Hour</span>
                            <div className="valign-wrapper" style={styles.boxStyle}>
                                <img style={styles.imgStyle} src={require("../assets/images/cocktail-head.png")} className="responsive-img" id="card-img"></img>
                            </div>
                            <div className="card-content">
                                <p>Helping the fellow beverage lover and newbie mixer alike find cocktail recipes in a pinch.</p>
                            </div>
                            <div className="card-action">
                                <a href="https://lyssg2.github.io/cocktail-hour/">See it Live</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s6" id="card-box">
                    <div className="card large z-depth-4">
                        <div className="card-content">

                            <span className="card-title">Weather Dashboard</span>
                            <div className="valign-wrapper" style={styles.boxStyle}>
                                <img style={styles.imgStyle} src={require("../assets/images/weather-icon.jpg")} className="responsive-img" id="card-img"></img>
                            </div>
                            <div className="card-content">
                                <p>Search for a city's current weather and a 5 day forecast to prepare for travel.</p>
                            </div>
                            <div className="card-action">
                                <a href="https://lyssg2.github.io/Weather-Forecast-App/">See it Live</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s6" id="card-box">
                    <div className="card large z-depth-4">
                        <div className="card-content">
                            <span className="card-title">Just Another Text Editor</span>
                            <div className="valign-wrapper" style={styles.boxStyle}>
                                <img style={styles.imgStyle} src={require("../assets/images/text-editor.jpg.png")} className="responsive-img" id="card-img"></img>
                            </div>
                            <div className="card-content">
                                <p>Write code anywhere. Online or offline!</p>
                            </div>
                            <div className="card-action">
                                <a href="https://nameless-bayou-34119.herokuapp.com/">See it Live</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;
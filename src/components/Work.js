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
        <div class="container">
            <div class="row center-align">
            <h3>Check out some of my code</h3>
            <div class="col s6">
                    <div class="card large z-depth-4">
                        <div class="card-content">
                            <span class="card-title">extracted.</span>
                            <div class="valign-wrapper" style={styles.boxStyle}>
                                <img style={styles.imgStyle} src={require("../assets/images/coffeebackground.jpg")} class="responsive-img" id="card-img"></img>
                            </div>
                            <div class="card-content">
                                <p>A website connecting the coffee lover to the best coffee shops in the PNW.</p>
                            </div>
                            <div class="card-action">
                                <a href="https://extracted-coffee.herokuapp.com/">See it Live</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col s6" id="card-box">
                    <div class="card large z-depth-4">
                        <div class="card-content">
                            <span class="card-title">Cocktail Hour</span>
                            <div class="valign-wrapper" style={styles.boxStyle}>
                                <img style={styles.imgStyle} src={require("../assets/images/cocktail-head.png")} class="responsive-img" id="card-img"></img>
                            </div>
                            <div class="card-content">
                                <p>Helping the fellow beverage lover and newbie mixer alike find cocktail recipes in a pinch.</p>
                            </div>
                            <div class="card-action">
                                <a href="https://lyssg2.github.io/cocktail-hour/">See it Live</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col s6" id="card-box">
                    <div class="card large z-depth-4">
                        <div class="card-content">

                            <span class="card-title">Weather Dashboard</span>
                            <div class="valign-wrapper" style={styles.boxStyle}>
                                <img style={styles.imgStyle} src={require("../assets/images/weather-icon.jpg")} class="responsive-img" id="card-img"></img>
                            </div>
                            <div class="card-content">
                                <p>Search for a city's current weather and a 5 day forecast to prepare for travel.</p>
                            </div>
                            <div class="card-action">
                                <a href="https://lyssg2.github.io/Weather-Forecast-App/">See it Live</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col s6" id="card-box">
                    <div class="card large z-depth-4">
                        <div class="card-content">
                            <span class="card-title">Just Another Text Editor</span>
                            <div class="valign-wrapper" style={styles.boxStyle}>
                                <img style={styles.imgStyle} src={require("../assets/images/text-editor.jpg.png")} class="responsive-img" id="card-img"></img>
                            </div>
                            <div class="card-content">
                                <p>Write code anywhere. Online or offline!</p>
                            </div>
                            <div class="card-action">
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
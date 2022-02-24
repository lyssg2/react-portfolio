import React from 'react'
import 'materialize-css/dist/css/materialize.min.css';

function Skills() {
  return (
    <div className="container">

      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Lyss got Skills</span>
            <p>Some technologies and languages I work with...</p>
            <ul>
              <li>React</li>
              <li>GraphQL</li>
              <li>Javascript</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>MySQL and NoSQL</li>
              <li>MongoDB</li>
              <li>APIs</li>
              <li>REST</li>
              <li>Node.js</li>
              <li>Test-Driven Developement</li>
              <li>Github</li>
              <li>VSCode</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div className="card-action">
            <a href="https://docs.google.com/document/d/1AXuYjm56JkD8URFyYIUMWmWzpLDPWgLbF12m_GLejx4/edit?usp=sharing">Resume</a>
            <a href="https://www.linkedin.com/in/lyss-garcia-6a480a155/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function Skills() {
  return (
    <div id="skills" className="section">
      <h1>I know...</h1>
      <Container>
        <Row>
          <Col xs={3}>
            <p>
              I started off in Python, but I'm primarily a Javascript developer now. Here are the languages, technologies, and tools that I've used in the past.
            </p>
          </Col>
          <Col>
            <h6>Languages</h6>
            <ul>
              <li>Javascript</li>
              <li>Python</li>
              <li>HTML/CSS</li>
              <li>SQL</li>
            </ul>
          </Col>
          <Col>
            <h6>Frameworks</h6>
            <ul>
              <li>React</li>
              <li>React Native with Expo</li>
              <li>Redux</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Selenium</li>
              <li>PostgreSQL</li>
              <li>Sequelize</li>
              <li>Jasmine (Unit Testing)</li>
            </ul>
          </Col>
          <Col>
            <h6>Tools</h6>
            <ul>
              <li>JIRA</li>
              <li>Asana</li>
              <li>Heroku</li>
              <li>Travis CI</li>
              <li>Google Analytics</li>
              <li>Mixpanel</li>
            </ul>
          </Col>
          <Col>
            <h6>Software</h6>
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>SPSS</li>
            </ul>
          </Col>
          <Col>
            <h6>Spoken Languages</h6>
            <ul>
              <li>English</li>
              <li>Mandarin Chinese</li>
              <li>Thai</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

import React from 'react'
import { Container, Row, Col, Card, ListGroup, CardDeck } from 'react-bootstrap'

const skills = {
  languages: ['Javascript', 'Python', 'HTML/CSS', 'SQL'],
  frameworks: [
    'React',
    'React Native with Expo',
    'Redux',
    'Node.js',
    'Express',
    'Selenium',
    'PostgreSQL',
    'Sequelize',
    'npm',
    'webpack',
    'Jasmine (Unit Testing)'
  ],
  tools: [
    'JIRA',
    'Asana',
    'Heroku',
    'Travis CI',
    'Google Analytics',
    'Mixpanel'
  ],
  software: ['Adobe Photoshop', 'Adobe Illustrator', 'SPSS'],
  spokenLanguages: ['English', 'Mandarin Chinese', 'Thai']
}

const camelToTitle = (str) => {
  let lowerCase = [...str.toLowerCase()]
  for (let i = 0; i < str.length; i++) {
    if (str[i] === lowerCase[i].toUpperCase()) {
      lowerCase.splice(i, 0, ' ')
    }
  }
  return lowerCase.join('')
}

export default function Skills() {
  return (
    <div id="skills" className="section">
      <h1 className="header">I know...</h1>
      <Container>
        <Row>
          <Col xs="auto" lg={20}>
            <p>
              Javascript as my primary language, though I started off in Python.
              I currently specialize in the NERD stack (Node, Express, React/Redux, Databases with SQL), and have experience collaborating on projects using scrum and CI/CD with unit testing.
            </p>
          </Col>
        </Row>
        <Row>
          {Object.keys(skills).map(skillCat => (
            <Col key={skillCat}>
              <h6 className="skill-cats">{camelToTitle(skillCat)}</h6>
              <ul>
                {skills[skillCat].map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

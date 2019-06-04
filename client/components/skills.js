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
              As you may have noticed, I haven't qualified/quantified how well I
              know each of these languages, technologies, or tools -- as much as
              I'd like to say that I'm an expert in all of them, I believe
              that's best left for you to determine based on my work below or{' '}
              <a href="/#contact">having a conversation with me</a>!
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
            // <Card key={skillCat} style={{ width: '18rem' }}>
            //   <Card.Header className="text-muted">{skillCat}</Card.Header>
            //   <ListGroup variant="flush">
            //     {skills[skillCat].map(skill => (
            //       <ListGroup.Item key={skill}>{skill}</ListGroup.Item>
            //     ))}
            //   </ListGroup>
            // </Card>
          ))}
        </Row>
      </Container>
    </div>
  )
}
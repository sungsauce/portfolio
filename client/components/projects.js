import React from 'react'
import { Container, Row, Col, Card, Button, CardDeck } from 'react-bootstrap'

const projects = [
  {
    title: 'Whazzat?!',
    img: '',
    text: 'Mobile OCR app built using React Expo',
    footer: 'Solo Project'
  },
  {
    title: 'Julia',
    img: 'julia.jpg',
    text:
      'Voice Assistant Web Application built using React, Redux, Express, and Node.js',
    footer: 'Group Project'
  },
  {
    title: "Hot N' Saucey",
    img: 'hotnsaucey.png',
    text:
      'E-commerce site selling hot sauces; built using React, Redux, Express, and Node.js',
    footer: 'Group Project'
  },
  {
    title: 'Mind of a Planner',
    img: 'planner.png',
    text: 'Quantitative Research Study',
    footer: 'Solo Project'
  }
]

export default function Projects() {
  return (
    <div id="projects" className="section">
      <h1 className="header">I've made...</h1>
      <Container>
        <CardDeck>
          {projects.map(p => {
            return (
              <Card key={p.title}>
                <Card.Img variant="top" src={p.img} />
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text>{p.text}</Card.Text>
                  <Button bsPrefix="details">Details</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{p.footer}</small>
                </Card.Footer>
              </Card>
            )
          })}
        </CardDeck>
      </Container>
    </div>
  )
}

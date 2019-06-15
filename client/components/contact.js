import React, { Component } from 'react'
import { Container, Form, Row, Col, Button, Toast } from 'react-bootstrap'
import Axios from 'axios'

// TODO: Add loading and sent confirmation

const contactIcons = [
  {
    link: 'mailto:wendysungportfolio@gmail.com',
    faName: 'fas fa-envelope'
  },
  {
    link: 'https://github.com/sungsauce',
    faName: 'fab fa-github'
  },
  {
    link: 'https://www.linkedin.com/in/wendysung/',
    faName: 'fab fa-linkedin'
  },
  {
    link: 'https://twitter.com/wendysungasong',
    faName: 'fab fa-twitter-square'
  }
]

export default class Contact extends Component {
  constructor() {
    super()
    this.state = {
      validated: false,
      name: '',
      email: '',
      message: '',
      showConfirmation: false
    }
  }

  handleChange = e => {
    const { id, value } = e.target
    this.setState({ [id]: value })
  }

  handleSubmit = async e => {
    const form = e.target
    if (!form.checkValidity()) {
      e.preventDefault()
      e.stopPropagation()
    }
    e.preventDefault()
    this.setState({ validated: true, showConfirmation: true })
    await Axios.post('/api/contact', this.state)
    form.reset()
    this.setState({ validated: false, name: '', email: '', message: '' })
  }

  handleClose = () => {
    this.setState({ showConfirmation: false })
  }

  render() {
    const { validated, showConfirmation } = this.state
    return (
      <div id="contact" className="section">
        <div id="confirmation-container">
          <Toast
            id="confirmation"
            onClose={this.handleClose}
            show={showConfirmation}
            delay={3000}
            autohide
            variant="success"
          >
            <Toast.Body>Email sent!</Toast.Body>
          </Toast>
        </div>

        <h1 className="header">Let's talk!</h1>
        <Container>
          <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Full Name"
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="name@example.com"
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows="3"
                onChange={this.handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a message.
              </Form.Control.Feedback>
            </Form.Group>

            <div id="submit">
              <Button bsPrefix="contact-submit" type="submit">
                Send
              </Button>
            </div>
          </Form>

          <Row id="contact-icons">
            {contactIcons.map(icon => (
              <a
                key={icon.link}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={icon.faName} />
              </a>
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}

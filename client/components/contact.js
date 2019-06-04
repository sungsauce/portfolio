import React, { Component } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Axios from 'axios'

export default class Contact extends Component {
  constructor() {
    super()
    this.state = {
      validated: false,
      name: '',
      email: '',
      message: ''
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
    this.setState({ validated: true })
    await Axios.post('/api/contact', this.state)
    form.reset()
    this.setState({ validated: false, name: '', email: '', message: '' })
  }

  render() {
    const { validated } = this.state
    return (
      <div id="contact" className="section">
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

            <Button bsPrefix="contact-submit" type="submit">
              Submit
            </Button>
          </Form>

          <Row id="contact-icons">
            <a
              href="mailto:wendalssung@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope" />
            </a>
            <a
              href="https://github.com/sungsauce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/wendysung/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://twitter.com/wendysungasong"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter-square" />
            </a>
          </Row>
        </Container>
      </div>
    )
  }
}

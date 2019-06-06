import React from 'react'
import { Container, Modal, Card, Image } from 'react-bootstrap'

const projects = [
  {
    title: 'Whazzat?!',
    img: 'whazzat.png',
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

export default class Projects extends React.Component {
  constructor() {
    super()
    this.state = {
      showPreview: false,
      currProj: {},
      hoverDisplay: projects.reduce((acc, p) => {
        acc[p.title] = 'none'
        return acc
      }, {})
    }
  }

  expandPreview = proj => {
    this.setState({ showPreview: true, currProj: proj })
  }

  closePreview = () => {
    this.setState({ showPreview: false })
  }

  hoverIn = p => {
    this.setState((state) => {
      return { hoverDisplay: { ...state.hoverDisplay, [p.title]: 'block' } }
    })
  }

  hoverOut = p => {
    this.setState((state) => {
      return { hoverDisplay: { ...state.hoverDisplay, [p.title]: 'none' } }
    })
  }

  render() {
    const { showPreview, currProj, hoverDisplay } = this.state

    return (
      <div id="projects" className="section">
        <h1 className="header">I've made...</h1>
        <Container id="project-cards">
          {projects.map(p => {
            return (
              <Card
                key={p.title}
                onMouseOver={() => this.hoverIn(p)}
                onMouseOut={() => this.hoverOut(p)}
              >
                <Card.Img variant="top" src={p.img} />
                <Card.ImgOverlay style={{ display: hoverDisplay[p.title] }}>
                  <div onClick={() => this.expandPreview(p)}>
                    <i className="fas fa-search-plus fa-7x" />
                  </div>
                </Card.ImgOverlay>
              </Card>
            )
          })}
        </Container>
        <Modal show={showPreview} onHide={this.closePreview} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{currProj.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={currProj.img} fluid />
            <h4>{currProj.footer}</h4>
            <p>{currProj.text}</p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

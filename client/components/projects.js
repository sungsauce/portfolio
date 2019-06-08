import React from 'react'
import { Container, Modal, Card, Image } from 'react-bootstrap'

const projects = [
  {
    title: 'Whazzat?!',
    img: 'whazzat.png',
    description:
      'This mobile OCR app won me a "Nerd Cred" award (most technologically challenging) during a 3-day hackathon. "Whazzat?!" allows you to identify any ambiguous-looking object using just your phone camera and an internet connection. Maybe you\'re travelling and want to know the name of a foreign dish, or maybe you\'re learning English and want to know the words for everyday things -- "Whazzat?!" to the rescue!',
    specs: [
      'Solo Project',
      'React Native Expo / Redux / Google Cloud Vision API / Wikipedia API'
    ],
    link: '',
    github: 'https://github.com/sungsauce/stackathon'
  },
  {
    title: 'Julia',
    img: 'julia.jpg',
    description:
      'This voice assistant web application was featured as one of Fullstack\'s 5 "Groundbreaking Projects" from Demo Day. \n\nOur team wanted a solution to the common struggle of following recipe instructions while cooking, so we created Julia: a voice assistant powered by the WebSpeech API that would allow you to use your voice to do things like navigate a recipe and identify ingredients specific to a particular recipe step. Julia also serves as your online cookbook where you can add recipes from your favorite sites. \n\nMy Individual contributions included web scraping for user-submitted recipes, configuring voice commands and website responsiveness. We collaborated using an agile development framework: 1 week sprints, daily scrums, code reviews, pair programming, tracking issues with Waffle.io',
    specs: [
      'Group Project',
      'React / Redux / Node / Express / PostgreSQL / Travis CI/CD / Heroku / WebSpeech API / Web Scraping with Cheerio'
    ],
    link: 'http://maries-roc-julia.herokuapp.com/',
    github: 'https://github.com/1901cs-maries-roc/julia'
  },
  {
    title: "Hot N' Saucey",
    img: 'hotnsaucey.png',
    description:
      'We built an e-commerce site for hot sauces within 7 business days using an agile development framework: 1 week sprints, daily scrums, code reviews, pair programming, and tracking issues with Waffle.io. We incorporated features such as product filtering, cart editing, cart persistence, payment using Stripe, and user account management. \n\nMy individual contributions included product filtering, cart persistence between guest and logged in user, payments and deployment.',
    specs: [
      'Group Project',
      'React / Redux / Node / Express / PostgreSQL / Passport / Stripe / Travis CI/CD / Heroku'
    ],
    link: 'http://mercury-cap-graceshopper.herokuapp.com',
    github: 'https://github.com/mercury-cap/graceshopper'
  },
  {
    title: 'Mind of a Planner',
    img: 'planner.png',
    description:
      'I was once pining for a job as a strategist in the advertising world, and wanted a way to demonstrate my strategic skills. To that end, I interviewed 6 planners and surveyed 27 professionals in the field, then used SPSS to run statistical and correlation analyses in order to explore the psychographics of Account Planners.',
    specs: ['Solo Project'],
    link: '',
    github: ''
  }
]


export default class Projects extends React.Component {
  constructor() {
    super()
    this.state = {
      showPreview: false,
      currProj: { specs: [] },
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
    this.setState(state => {
      return { hoverDisplay: { ...state.hoverDisplay, [p.title]: 'block' } }
    })
  }

  hoverOut = p => {
    this.setState(state => {
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
            {currProj.title === 'Mind of a Planner' ? (
              <iframe
                src="https://www.slideshare.net/wendysungasong/slideshelf"
                width="760px"
                height="570px"
                frameBorder="0"
                marginWidth="0"
                marginHeight="0"
                scrolling="no"
                style={{border: 'none'}}
                allowFullScreen
                webkitallowfullscreen
                mozallowfullscreen
              />
            ) : (
              <Image src={currProj.img} fluid />
            )}
            <div id="proj-details">
              <div id="proj-specs">
                {currProj.specs.map(spec => (
                  <p key={spec}>{spec}</p>
                ))}
                {currProj.link ? (
                  <div>
                    <a
                      href={currProj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-link" /> Deployed Site
                    </a>
                  </div>
                ) : null}
                {currProj.github ? (
                  <div>
                    <a
                      href={currProj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github" /> GitHub Repo
                    </a>
                  </div>
                ) : null}
              </div>
              <div id="proj-desc">
                <div>{currProj.description}</div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

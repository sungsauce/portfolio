import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { Container, Row, Col, Image, Collapse } from 'react-bootstrap'

const popover = (
  <Popover id="popover-basic">
    Answering the question "Where are you from?" has never been easy for me. I
    consider my identity ambiguously divided across 3 different cultures:
    Taiwanese (birthplace, nationality), Thai (raised there), and American
    (school I attended in Thailand, and current residence). The intersection of
    these is what I call the "fourth culture" -- that of my own.
  </Popover>
)

export default function About() {
  return (
    <div id="about" className="section">
      <h1 className="header">I am...</h1>
      <Container>
        <Row>
          <Col>
            <Image src="profile.jpg" roundedCircle />
          </Col>
          <Col className="about-caption">
            <p>
              a fearless full stack software engineer specializing in the NERD
              stack (Node, Express, React/Redux, Databases with SQL). Before
              software engineering, I've tackled challenges across the worlds of
              data analytics, market research, advertising, journalism, and
              education. With my skills in software engineering and background
              in business strategy,{' '}
              <u>
                I can understand problems from both a technical and business
                perspective.
              </u>{' '}
              This, paired with my fascination with people and cultures, is how
              I hope to create impactful customer-centric technologies.
            </p>
            <p>
              When I'm not out in the battlefields of code, I enjoy riding my
              bike across the boroughs of New York, discovering new food, and
              karaoke.
            </p>
            <p>
              I'm also a{' '}
              <OverlayTrigger
                trigger={['hover', 'click']}
                placement="bottom"
                overlay={popover}
              >
                <span>
                  <u>Fourth Culture Kid</u>{' '}
                  <i className="fa fa-question-circle" />
                </span>
              </OverlayTrigger>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

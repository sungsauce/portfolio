import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'react-bootstrap'

const popover = (
  <Popover id="popover-basic">
    Answering the question "Where are you from?" has never been easy for me. I
    was born in Taiwan and raised in Thailand, but with an identity ambiguously
    divided among 3 different cultures: Taiwanese (birthplace, nationality),
    Thai (hometown), and American (educated from Pre-K through secondary school,
    and current resident of over 10 years). The intersection of these is what I
    call the "fourth culture" -- that of my own.
  </Popover>
)

export default function About() {
  return (
    <div id="about" className="section">
      <h1>I am...</h1>
      <Container>
        <Row>
          <p>
            a fearless full stack web developer specializing in the NERD stack
            (Node, Express, React/Redux, Databases with SQL). Before software
            engineering, I've tackled challenges across the worlds of
            journalism, advertising, market research, language education, and
            social media analytics. With my skills in software engineering and
            business strategy,{' '}
            <u>
              I can understand problems from both a technical and business
              perspective.
            </u>{' '}
            This, paired with my fascination with people and cultures, is how I
            hope to create impactful customer-centric technologies.
          </p>
          <p>
            When I'm not out in the battlefields of code, I enjoy riding my bike
            around the 5 boroughs, discovering new food and cuisines, and
            karaoke.
          </p>
          <p>
            I'm also a{' '}
            <OverlayTrigger placement="right" overlay={popover}>
              <span>
                <u>Fourth Culture Kid</u>{' '}
                <FontAwesomeIcon icon={faQuestionCircle} inverse />
              </span>
            </OverlayTrigger>
          </p>
        </Row>
      </Container>
    </div>
  )
}

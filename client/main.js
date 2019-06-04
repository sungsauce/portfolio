import React from 'react'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Experience from './components/experience'
import Contact from './components/contact'
import Intro from './components/intro'
import { Container, Row, Col } from 'react-bootstrap'

export default function Main() {
  return (
    <React.Fragment>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </React.Fragment>
  )
}

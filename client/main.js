import React from 'react'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Experience from './components/experience'
import Contact from './components/contact'

export default function Main() {
  return (
    <React.Fragment>
      <div id="intro" className="section">
        <h1>Hi, I'm Wendy</h1>
        <p>Market Researcher turned Fearless Full Stack Software Engineer</p>
      </div>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </React.Fragment>
  )
}

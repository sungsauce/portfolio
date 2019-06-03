import React from 'react'
import {Route} from 'react-router-dom'
import Main from './main'

const Root = () => {
  return (
    <div>
      <div id="nav">
        <a href="#intro">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
      <div id="main">
        <Route exact path="/" component={Main} />
      </div>
    </div>
  )
}

export default Root

import React from 'react'
import {Link, Route} from 'react-router-dom'
import Main from './main'

const Root = () => {
  return (
    <div>
      <nav id="nav">
        <Link to="/">Home</Link>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <main>
        <Route exact path="/" component={Main} />
      </main>
    </div>
  )
}

export default Root

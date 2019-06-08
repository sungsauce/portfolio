import React from 'react'
import { Route } from 'react-router-dom'
import Main from './main'
import { Navbar, Nav } from 'react-bootstrap'

const Root = () => {
  window.onscroll = function() {
    scrollFunction()
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      document.getElementById('nav').style.top = '0'
    } else {
      document.getElementById('nav').style.top = '-4em'
    }
  }

  return (
    <div>
      <Navbar id="nav" expand="lg">
        <Navbar.Brand href="#intro">
          <img src="wendylogo.png" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#intro">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div id="main">
        <Route exact path="/" component={Main} />
      </div>
    </div>
  )
}

export default Root

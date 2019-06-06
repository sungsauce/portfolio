import React from 'react'
import { Container } from 'react-bootstrap'

const titles = [
  'Market Researcher',
  'Account Executive',
  'Strategist',
  'Social Media Analyst',
  'Journalist',
  'Teacher',
  'Fourth Culture Kid'
]

export default class Intro extends React.Component {
  constructor() {
    super()
    this.state = {
      title: titles[0]
    }
  }

  componentDidMount () {
    let index = 0
    const tick = () => {
      index = index < titles.length - 1 ? index + 1 : 0
      this.setState({title: titles[index]})
    }
    window.setInterval(tick, 2000)
  }

  render() {
    return (
      <div id="intro" className="section">
        <h1 id="greeting">Hi, I'm Wendy:</h1>
        <div id="title-desc">
          <p id="title-name">{this.state.title}</p> turned Full Stack Software
          Engineer
        </div>
      </div>
    )
  }
}

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

const colors = ['#90CCF4', '#F78888', '#5DA2D5', '#F3D250']

export default class Intro extends React.Component {
  constructor() {
    super()
    this.state = {
      title: titles[0],
      titleColor: colors[0]
    }
  }

  componentDidMount() {
    let titleIdx = 0
    let colorIdx = 0
    const tick = () => {
      titleIdx = titleIdx < titles.length - 1 ? titleIdx + 1 : 0
      colorIdx = colorIdx < colors.length - 1 ? colorIdx + 1 : 0
      this.setState({ title: titles[titleIdx], titleColor: colors[colorIdx] })
    }
    window.setInterval(tick, 2000)
  }

  render() {
    return (
      <div id="intro" className="section">
        <h1 id="greeting">Hi, I'm Wendy:</h1>
        <div id="title-desc">
          <p id="title-name" style={{ color: this.state.titleColor }}>
            {this.state.title}
          </p>{' '}
          turned Full Stack Software Engineer
        </div>
      </div>
    )
  }
}

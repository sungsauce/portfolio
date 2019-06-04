import React from 'react'
import { Container } from 'react-bootstrap'

const titles = [
  'Market Researcher',
  'Account Executive',
  'Strategist',
  'Social Media Analyst',
  'Journalist',
  'Teacher'
]

let loadCount = 0

const switchTitle = () => {
  loadCount++
  let index = 0
  const tick = () => {
    index = index < titles.length - 1 ? index + 1 : 0
    document.getElementById('title-name').innerHTML = titles[index]
  }

  if (loadCount === 1) window.setInterval(tick, 2000)
}

export default function Intro() {
  switchTitle()
  return (
    <div id="intro" className="section">
      <h1 id="greeting">Hi, I'm Wendy:</h1>
      <p id="title-desc">
        <span id="title-name">{titles[0]}</span> turned Full Stack Software
        Engineer
      </p>
    </div>
  )
}

import React from 'react'

// TODO: collapse-all function to view summary

const experiences = [
  {
    isWork: true,
    title: 'Software Engineering Teaching Fellow',
    company: 'Fullstack Academy Of Code',
    companyLink: 'https://www.fullstackacademy.com/',
    dates: 'April 2019 - Present',
    description: [
      'One of only 8 graduates offered the Fullstack Teaching Fellowship',
      'Administer technical interviews for prospective students, lead daily standups and code reviews, teach data structures, algorithms and the NERD stack (Node, Express, React, Redux, Databases with SQL)'
    ]
  },
  {
    isWork: false,
    title: 'Software Engineering Immersive',
    company: 'Grace Hopper Program at Fullstack Academy Of Code',
    companyLink: 'https://www.gracehopper.com/',
    dates: 'January 2019 - April 2019',
    description: [
      '17-week immersive coding program',
      'Senior Panel speaker',
      'Hackathon winner'
    ]
  },
  {
    isWork: true,
    title: 'Product Support Lead, Data Analyst',
    company: 'ListenFirst Media',
    companyLink: 'https://www.listenfirstmedia.com/',
    dates: 'October 2017 - December 2018',
    description: [
      'Reduced time to complete administrative tasks from 4 hours to 4 minutes by writing an automation script using Python and Selenium',
      'Converted accounts like Sony and Fidelity Investments from trial to contract using big data analysis and collaborating cross-functionally across Product, UX/UI, Engineering and Sales using task management tools like JIRA and Asana'
    ]
  },
  {
    isWork: true,
    title: 'Senior Research Executive',
    company: 'Hall & Partners',
    companyLink: 'https://www.hallandpartners.com/',
    dates: 'April 2016-July 2017',
    description: [
      'Helped clients like American Express and Jameson craft global marketing strategies by utilizing quantitative research methodologies: A/B monadic testing, trend tracking and projecting, discrete choice modelling, data calibration, and statistical testing'
    ]
  },
  {
    isWork: true,
    title: 'Research Executive',
    company: 'Hall & Partners',
    companyLink: 'https://www.hallandpartners.com/',
    dates: 'July 2014-March 2016',
    description: [
      'Leveraged quantitative, qualitative and secondary research methodologies to conduct brand tracking, creative concept testing, customer decision journey exploration, and strategic analyses '
    ]
  },
  {
    isWork: true,
    title: 'Account Executive',
    company: 'Havas',
    companyLink: 'https://havas.com/',
    dates: 'March 2011-September 2012',
    description: [
      'Facilitated the completion of over 70 projects on an $8M pharmaceutical business by liaising between the multiple agency departments, client communications and managing project timelines, resources, vendors, and finances'
    ]
  },
  {
    isWork: false,
    title:
      'Bachelor of Science, Double Major in Advertising and International Relations',
    company: 'University of Miami',
    companyLink: 'https://welcome.miami.edu/',
    dates: null,
    description: ['Dean’s Scholarship', 'Provost’s Honor Roll', 'Dean’s List']
  }
]

export default function Experience() {
  return (
    <div id="experience" className="section">
      <h1 className="header">I've been...</h1>
      <div className="timeline">
        {experiences.map((ex, i) => (
          <div
            key={ex.title}
            className={`ex-container ${i % 2 ? 'right' : 'left'}`}
          >
            <div className="content">
              <h6>
                {ex.isWork ? (
                  <i className="fas fa-briefcase" style={{color: '#F3D250'}} />
                ) : (
                  <i className="fas fa-graduation-cap" style={{color: '#F78888'}} />
                )}
                <strong> {ex.title}</strong>
              </h6>
              <p>
                <a
                  href={ex.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ex.company}
                </a>
              </p>
              <p>{ex.dates}</p>
              <ul>
                {ex.description.map(d => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

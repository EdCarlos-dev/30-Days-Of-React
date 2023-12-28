// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import reactLogo from './images/logo192.png'
import htmlLogo from './images/htmllogo.png'
import cssLogo from './images/csslogo.png'
import javascriptLogo from './images/javascriptlogo.png'
// JSX element, header
const welcome = 'Welcome'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Ed Carlos',
  lastName: 'Santos',
}
const date = 'Dec 31, 2023'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Developer: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)


const yearBorn = 1987
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript' , 'Typescript']
const techsFormatted = techs.map((item) => <li>{item}</li>)

const user = (
  <div>
    <p><b>Front end Technologies</b>.</p> 
    <img className='techimage' src={htmlLogo} alt='ReactLogo' />
    <img className='techimage' src={cssLogo} alt='ReactLogo' />
    <img className='techimage' src={javascriptLogo} alt='ReactLogo' />
    <img className='techimage' src={reactLogo} alt='ReactLogo' />
  </div>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>

      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>

      </p>

      <ul>{techsFormatted}</ul>
      {personAge}
      {user}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import reactLogo from './images/logo192.png'
import htmlLogo from './images/htmllogo.png'
import cssLogo from './images/csslogo.png'
import javascriptLogo from './images/javascriptlogo.png'
import userIcon from './images/usericon.png'

// JSX element, header
const welcome = 'Profile App'
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
      <h3>{welcome}</h3>
      <h2>{title}</h2>
      
      <small>Date: {date}</small>
    </div>
  </header>
)


const yearBorn = 1987
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
   {age} years old
  </p>
)

const contact = {
  country: 'Brazil',
  email: 'email#email.com',
  cellphone: '+55 11 999 999 999',
}

const contactCard = (

  <div className='card-div' >

      <img className='userimage' src={userIcon} alt='ReactLogo' />
      
      <div className='card-div-text'>
        <h2>{author.firstName} {author.lastName} </h2>
        {personAge}
        <p>{contact.country}</p>
        <p>{contact.email}</p>
        <p>{contact.cellphone}</p>
      </div>

  </div>
)

const skils = ['HTML', 'CSS', 'JavaScript' , 'Typescript', 'Proactivity', 'Responsability']
const skilsFormatted = skils.map((itemSkil) => <div className='skill-item'>{itemSkil}</div>)


const profileSkils = (

  <div className='skils-div' >

    <div>{skilsFormatted}</div>


  </div>
)


// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript' , 'Typescript']
const techsFormatted = techs.map((item) => <li>{item}</li>)

const techLogos = (
  <div className='tecnologies'>
    <p><b>Front end Technologies</b>.</p> 
    <img className='techimage' src={htmlLogo} alt='ReactLogo' />
    <img className='techimage' src={cssLogo} alt='ReactLogo' />
    <img className='techimage' src={javascriptLogo} alt='ReactLogo' />
    <img className='techimage' src={reactLogo} alt='ReactLogo' />
  </div>
)

const techUsed = (

 <div>
    
    <p>
    Developed using{' '}
    <strong>
      <em>react.js</em>
    </strong>

    </p>
    
    <ul>{techsFormatted}</ul>
    <ul>{subtitle}</ul>
  </div>

)

// JSX element, main
const main = (
  <main>

    <div className='main-wrapper'>

      {contactCard}

      {profileSkils}

      {techUsed}

      {techLogos}

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
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

const subtitle = 'JavaScript Library'

const currentYear = new Date().getFullYear()


const contact = {
  firstName: 'Ed Carlos',
  lastName: 'Santos',
  country: 'Brazil',
  email: 'email#email.com',
  cellphone: '+55 11 999 999 999',
  yearBorn: 1987,
  skills: [
    'HTML', 
    'CSS', 
    'JavaScript' , 
    'Typescript', 
    'Python', 
    'Artificial Interigence', 
    'Proactivity', 
    'Responsability']
}


const UserCard = () => {

  return (

    <div className='card-div' >

        <img className='userimage' src={userIcon} alt='ReactLogo' />
        
        <div className='card-div-text'>
          <h2>{contact.firstName} {contact.lastName} </h2>
          <p>{currentYear - contact.yearBorn} years old</p>
          <p>{contact.country}</p>
          <p>{contact.email}</p>
          <p>{contact.cellphone}</p>
        </div>

    </div>
  )
}

const buttonStyles = {
  padding: '10px 20px',
  background: 'black',
  border: 'none',
  borderRadius: 50,
  color: 'white',
  
}

const Button = (props) => {

  return (
    <button style={buttonStyles} onClick={props.onClick}>{props.text}</button>
  )

}

  const rainbow = () => {
    let str =  '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

  const HexaColor = () => {
    const bgColor = rainbow()
    const styles = {
      height: '100px',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      fontFamily: 'Montserrat',
      margin: '2px auto',
      borderRadius: '5px',
      width: '75%',
      border: '2px solid black',
    }
    return (
      <div style={styles}>
        <h2>{bgColor}</h2>
      </div>
    )
  }

const skils = ['HTML', 'CSS', 'JavaScript' , 'Typescript', 'Python', 'Artificial Interigence', 'Proactivity', 'Responsability']
const skilsFormatted = skils.map((itemSkil) => <div className='skill-item'>{itemSkil}</div>)
const hardskils = [ 'Artificial Interigence', 'Proactivity', 'Responsability']
const hardskilsFormatted = hardskils.map((itemSkil) => <div className='skill-item-hard'>{itemSkil}</div>)



const ProfileSkils = () => {
  return (

    <div className='skils-div' >

      <div className='skil-div' >
      {skilsFormatted}
      {hardskilsFormatted}
      </div>
      {/* <div className='skil-div' >{hardskilsFormatted}</div> */}

    </div>
  )
}

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

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h4>{name}</h4>
      <small>{city}</small>
    </div>
  )
}

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ))
  return (
        <div>{countryList}</div>
  )
}

const countriesContainer = (

  <div className='container'>
    <div>
      <h3>Countries List</h3>
      <Countries countries={countries} />
    </div>
  </div>

)

////////////////////////////////

// JSX element, header

const Header = (props) => {

  return (
    <header>
        <title>{props.titlePage}</title>
        <div className='header-wrapper'>
          <h3>{props.welcome}</h3>
          <h2>{props.title}</h2>
          
          <small>Today: {props.date}</small>
        </div>
    </header>
  )
}

// JSX element, main
const Main = () => {

  const sayHi = () => {
    alert('Meassage !')
  }

  return (
    <main>
      <div className='main-wrapper'>

        <UserCard />
        <ProfileSkils />

        {techUsed}
        <Button text='Alert' onClick={sayHi}  />
        {techLogos}
        <HexaColor />
        {countriesContainer}

      </div>
    </main>
  )
}

const copyRight = 'Copyright 2020'

// JSX element, footer
const Footer = () => {

  return (
    <footer>
      <div className='footer-wrapper'>
        <p>{copyRight}</p>
      </div>
    </footer>
  )
}


// JSX element, app

const App = () => {
  const welcome = 'Profile App'
  const titlePage = '30 days react'
  const title = 'Getting Started React'

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  const date = mm + '/' + dd + '/' + yyyy;
  

  return (
    <div className='app'>
      <Header 
        welcome = {welcome}
        titlePage = {titlePage}
        title = {title}
        date = {date}
      />
      <Main />
      <Footer />
    </div>
  )
}

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
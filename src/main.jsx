import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navbar } from './Components/Navbar.jsx'
import { Portfolio } from './Components/PortFolio.jsx'
import { SkillSet } from './Components/Skillset.jsx'
import { Aspiration } from './Components/Aspirations.jsx'
import { Contact } from './Components/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Portfolio />

    <SkillSet />
    <Aspiration />
    <Contact />

  </React.StrictMode>,
)

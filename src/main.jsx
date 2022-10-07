import React from 'react'
import ReactDOM from 'react-dom/client'
/* import Prueba from './pages/home/landing' */
import layout from './components/PageLayout'
import Landing from './pages/home/landing'
/* import Menu from './pages/nav/menu' */
import './css/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <layout > 
      <>
     {/*  <Menu /> */}
      <Landing saludo={"hola"}/>
      </>
    </layout>
  </React.StrictMode>
)

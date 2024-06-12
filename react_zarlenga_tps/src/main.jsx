import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Ejercicio1 from './components/ejercicio1/Ejercicio1.jsx' 
import Ejercicio2 from './components/ejercicio2/Ejercicio2.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Ejercicio1 /> */}
    <Ejercicio2 message="world"/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Ejercicio3 from './components/ejercicio3/Ejercicio3.jsx' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <App /> 
     <Ejercicio3 message='Hello World!' />


    
  </React.StrictMode>,
)

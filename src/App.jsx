//react imports
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//application imports
import Navbar from './components/Navbar.jsx'

//login imports
import Login from './components/Login.jsx'
import Verified from './components/loginvalidity/Verified.jsx'
import Unverified from './components/loginvalidity/Unverified.jsx'
import Invalid from './components/loginvalidity/Invalid.jsx'

var isLoggedIn = false;

function AppState(){
    if(isLoggedIn){

    } else {
        return <Login />
    }
}

ReactDOM.render(
  <React.StrictMode>
    <Navbar />

    <AppState />
  </React.StrictMode>,
  document.getElementById('root')
)
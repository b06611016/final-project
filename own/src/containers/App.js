import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import useLogin from './useLogin'
//import LoginPage from '../components/LoginPage'
//import FormPage from '../components/FormPage'
//import MenuPage from '../components/MenuPage'
//import DayPage from '../components/DayPage'
//import CountingPage from '../components/CountingPage'
//import RelaxPage from '../components/RelaxPage'

function App() {
  const { loginpage, login, create, formpage, menupage } = useLogin();

  //---------------------------------------------------------------------------------------------Function----------------------------------------------------------------------------


  //-----------------------------------------------------------------------------------------------Page------------------------------------------------------------------------------

  /*const menupage = (
    <MenuPage username={username} password={password}></MenuPage>
  )

  const daypage = (
    <DayPage username={username} password={password}></DayPage>
  )

  const countingpage = (
    <CountingPage username={username} password={password}></CountingPage>
  )*/
  //-----------------------------------------------------------------------------------------------Page------------------------------------------------------------------------------
  //return <div>{login ? menupage : (create ? formpage : loginpage)}</div>
  return <div className="App">{login ? menupage() : (create ? formpage : loginpage)}</div>
}

export default App

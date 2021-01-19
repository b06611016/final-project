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

  /*const [username, setUsername] = useState('')
  const [login, setLogin] = useState(false)
  const [create, setCreate] = useState(false)
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState('')*/

  /*const { loading, data, refetch } = useQuery(USER_QUERY, {
    variables: { username: username, password: password}
  })*/
  //const [addUser] = useMutation(CREATE_USER_MUTATION)
  const { loginpage, login, create, formpage, menupage } = useLogin();

  //---------------------------------------------------------------------------------------------Function----------------------------------------------------------------------------
  /*const checklogin = () => {
    refetch()
    setLogin(data.userCheck._isSuccess)
  }

  const Createclick = () => {
    setCreate(true)
  }*/
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
  return <div>{login ? menupage() : (create ? formpage : loginpage)}</div>
}

export default App

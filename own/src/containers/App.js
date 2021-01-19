import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import useLogin from './useLogin'
import LoginPage from '../components/LoginPage'
import FormPage from '../components/FormPage'
import MenuPage from '../components/MenuPage'
import DayPage from '../components/DayPage'
import CountingPage from '../components/CountingPage'
/*import { useQuery, useMutation } from '@apollo/react-hooks'
import {
  USER_QUERY,
  CREATE_USER_MUTATION,
} from '../graphql' */


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
  const { username, setUsername, login, setlogin, create, setCreate, password, setPassword, strength, setstrength, gender, setgender, createaccount, setcreate } = useLogin();

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
  const loginpage = (
    <LoginPage onChange1={(e) => setUsername(e.target.value)} onChange2={(e) => setPassword(e.target.value)} onClick1={setlogin} onClick2={setcreate} username={username} password={password}></LoginPage>
  )

  const formpage = (
    <FormPage username={username} password={password} onChange1={(e) => setUsername(e.target.value)} onChange2={(e) => setPassword(e.target.value)} onChange3={(e) => { setstrength(e) }} onChange4={(e) => { setgender(e) }} onClick1={createaccount}></FormPage>
  )

  const menupage = (
    <MenuPage username={username} password={password}></MenuPage>
  )

  const daypage = (
    <DayPage username={username} password={password}></DayPage>
  )

  const countingpage = (
    <CountingPage username={username} password={password}></CountingPage>
  )
  //-----------------------------------------------------------------------------------------------Page------------------------------------------------------------------------------
  //return <div>{login ? menupage : (create ? formpage : loginpage)}</div>
  return <div>{daypage}</div>
}

export default App

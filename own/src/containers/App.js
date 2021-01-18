import './App.css'
import React, { useEffect, useRef, useState } from 'react'
//import useChat from './useChat'
import LoginPage from '../components/LoginPage'
import FormPage from '../components/FormPage'
import { useQuery, useMutation } from '@apollo/react-hooks'
import {
  USER_QUERY,
  CREATE_USER_MUTATION,
} from '../graphql'


function App() {
  const [username, setUsername] = useState('')
  const [login, setLogin] = useState(false)
  const [create, setCreate] = useState(false)
  const [body, setBody] = useState('')
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState('')

  const { loading, data, refetch } = useQuery(USER_QUERY, {
    variables: { username: username, password: password}
  })
  const [addUser] = useMutation(CREATE_USER_MUTATION)


  //---------------------------------------------------------------------------------------------Function----------------------------------------------------------------------------
  const checklogin = () => {
    refetch()
    setLogin(data.userCheck._isSuccess)
  }

  const Createclick = () => {
    setCreate(true)
  }
  //---------------------------------------------------------------------------------------------Function----------------------------------------------------------------------------


  //-----------------------------------------------------------------------------------------------Page------------------------------------------------------------------------------
  const loginpage = (
    <LoginPage onChange1={(e) => setUsername(e.target.value)} onChange2={(e) => setPassword(e.target.value)} onClick1={checklogin} onClick2={Createclick} username={username} password={password}></LoginPage>    
  )

  const formpage = (
    <FormPage username={username} password={password} onChange1={() => {console.log("onchange1")}} onChange2={() => {console.log("onChange2")}} onChange3={() => {console.log("onChange3")}} onChange4={() => {console.log("onChange4")}} onClick1={() => {console.log("onClick1")}}></FormPage>
  )
  //-----------------------------------------------------------------------------------------------Page------------------------------------------------------------------------------
  return <div>{create?formpage:loginpage}</div>
}

export default App

import './App.css'
import React, { useEffect, useRef, useState } from 'react'
//import useChat from './useChat'
import LoginPage from '../components/LoginPage'
import { Buton, Input, message, Tag } from 'antd'


function App() {
  const [username, setUsername] = useState('')
  const [login, setLogin] = useState(false)
  const [body, setBody] = useState('')
  const [password, setPassword] = useState('')

  
  //const { sent, receive, status, opened, data, sendMessage, clearMessages, setsent, setreceive, refetch } = useChat()

  //const [username, setUsername] = useState('')
  //const [body, setBody] = useState('')
  //const [enter, setEnter] = useState(false)

  //const [time, setTime] = useState(0)
  //const bodyRef = useRef(null)

  const displayStatus = (s) => {
    if (s.msg) {
      const { type, msg } = s
      const content = {
        content: msg,
        duration: 0.5
      }

      switch (type) {
        case 'success':
          message.success(content)
          break
        case 'info':
          message.info(content)
          break
        case 'danger':
        default:
          message.error(content)
          break
      }
    }
  }


  const loginpage = (
    <LoginPage onChange1={() => {console.log("onchange1")}} onChange2={() => {console.log("onchange2")}} onClick1={() => {console.log("onclick1")}} onClick2={() => {console.log("onclick2")}} username={username} password={password}></LoginPage>    
  )

  return <div>{loginpage}</div>
}

export default App

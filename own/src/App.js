import './App.css'
import React, { useEffect, useRef, useState } from 'react'
//import useChat from './useChat'
import { Buton, Input, message, Tag } from 'antd'
import { Button } from 'react-bootstrap';

function App() {
  const [username, setUsername] = useState('')
  const [login, setLogin] = useState(false)
  const [body, setBody] = useState('')
  const [receiver, setReceiver] = useState('')

  const bodyRef = useRef(null)
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

  /*const chat = (
    <div className="App">
      <div className="App-title">
        <Button type="primary" onClick={() => {
          setsent('')
          setreceive('')
          setEnter(false)
        }}>
          Back
        </Button>
        <h3>{sent}'s simple chat</h3>
        <Button type="primary" danger onClick={clearMessages}>
          Clear
        </Button>
      </div>
      <div className="App-messages">
        {!data ? (
          <p style={{ color: '#ccc' }}>
            Loading...
          </p>
        ) : (
            data.chats.length === 0 ? (
              <p style={{ color: '#ccc' }}>
                No messages...
              </p>
            ) : (
                data.chats.map((e, i) => {
                  if (e.sent === sent)
                    return <p className="App-message" key={i}>
                      <Tag color="green">me</Tag> {e.body}
                    </p>
                  else if (e.sent === receive)
                    return <p className="App-message" key={i}>
                      <Tag color="blue">{e.sent}</Tag> {e.body}
                    </p>
                })
              )
          )}
      </div>
      <h2>To {receive}</h2>
      <Input.Search
        rows={4}
        value={body}
        ref={bodyRef}
        enterButton="Send"
        onChange={(e) => setBody(e.target.value)}
        placeholder="Type a message here..."
        onSearch={(msg) => {
          if (!msg) {
            displayStatus({
              type: 'error',
              msg: 'Please enter a username and a message body.'
            })
            return
          }

          sendMessage({ body: msg })
          setBody('')
        }}
      ></Input.Search>
    </div>
  )
  const main = (
    <div className="App-menu">
      <div>
        <p>who are you?</p>
        <input
          value={sent}
          onChange={(e) => setsent(e.target.value)} />

      </div>
      <div>
        <p>who do you want to chat?</p>
        <input
          value={receive}
          onChange={(e) => setreceive(e.target.value)} />
      </div>
      <button
        onClick={() => {
          setEnter(true)
          refetch()
        }}
        disabled={!sent || !receive}>start chat!</button>
    </div>
  )*/

  /*useEffect(() => {
    displayStatus(status)
  }, [status])*/
  
  const loginpage = (
    <>
      <div className="App-title">
        <h1>Fitting App</h1>
      </div>
      <div className="App-body">
        <div className="App-row">
          <h1>Account:</h1>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: 10 }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                bodyRef.current.focus()
              }
            }}
          ></Input>
        </div>
      
        <div className="App-row">
          <h1>Password:</h1>
          <Input
            rows={4}
            value={receiver}
            ref={bodyRef}
            onChange={(e) => setReceiver(e.target.value)}
            placeholder="Password"
            onKeyDown={(e) => {
              console.log("Key")
            }}
          ></Input>
        </div>
        <div className="App-row">
          <Button variant="success" onClick={() => {console.log("登入")}}>
            Log in
          </Button>
          <Button variant="primary" onClick={() => {console.log("創建新帳號")}}>
            Create
          </Button>
        </div>
      </div>
    </>
  )

  return <div>{loginpage}</div>
}

export default App

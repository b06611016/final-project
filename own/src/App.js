import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import useChat from './useChat'
import { Button, Input, message, Tag } from 'antd'

function App() {
  const { sent, receive, status, opened, data, sendMessage, clearMessages, setsent, setreceive } = useChat()

  const [username, setUsername] = useState('')
  const [body, setBody] = useState('')
  const [enter, setEnter] = useState(false)

  const bodyRef = useRef(null)

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

  const chat = (
    <div className="App">
      <div className="App-title">
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
        onClick={() => setEnter(true)}
        disabled={!sent || !receive}>start chat!</button>
    </div>
  )

  useEffect(() => {
    displayStatus(status)
  }, [status])

  return <div>{enter ? chat : main}</div>
}

export default App

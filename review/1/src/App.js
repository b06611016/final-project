import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Input, message, Tag } from 'antd'
import { SUBSCRIBE, SEND_MESSAGE, QUERY, CLEAR_MESSAGES } from './graphql'

import { useQuery, useMutation } from '@apollo/react-hooks'

function App() {
  const [addMessage] = useMutation(SEND_MESSAGE)
  const [clearAll] = useMutation(CLEAR_MESSAGES)

  const [username, setUsername] = useState('')
  const [sender, setSender] = useState('')
  const [receiver, setReceiver] = useState('')
  const [body, setBody] = useState('')

  const {data, subscribeToMore} = useQuery(QUERY(username))
  const bodyRef = useRef(null)

  const sendMessage = (msg) => {
      addMessage({
          variables: {
            sender: sender,
            receiver: msg.receiver,
            body: msg.body
          }
      })
  }

  const clearMessages = () => {
    clearAll({
      variables: {
        user: username
      }
    })
  }
  
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

  useEffect(()=>{
      if(username){
        subscribeToMore({
              document: SUBSCRIBE(username),
              updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data.message) return prev
                switch(subscriptionData.data.message.mutation){
                  case "SEND":
                    if(subscriptionData.data.message.data.receiver === username)
                      return prev
                  case "RECEIVE":
                    const msg = subscriptionData.data.message
                    return {messages:[...prev.messages, msg.data]}
                  case "DELETED":
                    let deletedUsername = subscriptionData.data.message.data.body
                    if(deletedUsername === "*")
                      return {messages:[]}
                    else{
                      let result = prev.messages.filter(e => e.sender !== deletedUsername && e.receiver !== deletedUsername)
                      return {messages:result}
                    }
                  default:
                    return prev
                  
                }
              }
          })
      }
  }, [username])


  return (username === '')? (
    <div className="App">
    <h1> Welcome to Simple Chat</h1>
      <Input placeholder="Enter your username"
        onChange={(e) => setSender(e.target.value)}
        value={sender}
        style={{ marginBottom: 10 }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setUsername(sender)
          }}} />
          </div>
    ):
    (<div className="App">
      <div className="App-title">
        <h1> {sender}'s Simple Chat</h1>
        <Button type="primary" danger onClick={clearMessages}>
          Clear
        </Button>
      </div>
      <div className="App-messages">
        {
          (data)?( 
            data.messages.map(({ sender, receiver, body }, i) => (
              (sender === username)? (<p className="App-message" key={i} style={{textAlign:"right"}}>
                {body} <Tag color="red"> To {receiver} </Tag>
              </p>):
              <p className="App-message" key={i}>
                <Tag color="blue">{sender}</Tag> {body}
              </p>
            ))
          ):null
        }
      </div>
      <Input
        placeholder="Enter destination"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
        style={{ marginBottom: 10 }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            bodyRef.current.focus()
          }
        }}
      ></Input>
      <Input.Search
        rows={4}
        value={body}
        ref={bodyRef}
        enterButton="Send"
        onChange={(e) => setBody(e.target.value)}
        placeholder="Type a message here..."
        onSearch={(msg) => {
          if (!msg || !username) {
            displayStatus({
              type: 'error',
              msg: 'Please enter a username and a message body.'
            })
            return
          }

          sendMessage({ sender: sender, receiver: receiver, body: msg })
          setBody('')
        }}
      ></Input.Search>
    </div>
  )
}

export default App

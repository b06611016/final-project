import React, { useState, useEffect, useCallback } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import {
  CHATS_QUERY,
  CREATE_CHAT_MUTATION,
  CHATS_SUBSCRIPTION,
  DELET_ALL_CHATS_MUTATION,
  DELETE_SUBSCIPTION
} from './graphql'
import { renderToStringWithData } from 'react-apollo'
// import { w3cwebsocket as W3CWebSocket } from 'websocket'

// const client = new W3CWebSocket('ws://localhost:4000')
//const client = new WebSocket('ws://localhost:4000')

const useChat = () => {
  //const [messages, setMessages] = useState([])
  const [status, setStatus] = useState({})
  const [opened, setOpened] = useState(false)
  const [sent, setSent] = useState("")
  const [receive, setReceive] = useState("")
  const { loading, error, data, subscribeToMore, refetch } = useQuery(CHATS_QUERY, {variables: {sent: sent, receive: receive}})
  const [addChat] = useMutation(CREATE_CHAT_MUTATION)
  const [deletChats] = useMutation(DELET_ALL_CHATS_MUTATION )
  

  /*client.onopen = () => {
    setOpened(true)
  }*/
  //console.log(data)
  const setsent = (name) => {setSent(name)}
  const setreceive = (name) => {setReceive(name)}
  useEffect(() => {
    //console.log("here")
    if (!loading && !error && !opened)
      setOpened(true);
    else if ((loading || error) && opened)
      setOpened(false);
  })

  useEffect(() => {
    //console.log("hihi");
    subscribeToMore({
      document: CHATS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        refetch()
      }
    })
  }, [subscribeToMore, refetch])

  const handleChatSubmit = useCallback((msg) => {
    console.log(msg)
    addChat({
      variables: {
        sent: msg.sent,
        receive: msg.receive,
        body: msg.body
      }
    })
  }, [addChat])
  const deleteChats = useCallback((msg) => {
    deletChats({
      variables: {
        request: msg,
        sent: sent
      }
    })
  }, [deletChats, sent])
  const sendMessage = ({body}) => {
    // TODO
    console.log(body)
    handleChatSubmit({sent: sent, receive: receive, body: body})
  }

  const clearMessages = () => {
    // TODO
    //sendData(['clear', '']);
    deleteChats('clear')
  }

  return {
    sent,
    receive,
    status,
    opened,
    data,
    sendMessage,
    clearMessages,
    setreceive,
    setsent,
    refetch
  }
}

/*client.onmessage = (message) => {
    const { data } = message
    const [task, payload] = JSON.parse(data)
    console.log(payload);
    switch (task) {
      case 'init': {
        setMessages(() => payload)
        break
      }
      case 'output': {
        setMessages(() => [...messages, payload])
        break
      }
      case 'status': {
        setStatus(payload)
        break
      }
      case 'cleared': {
        setMessages([])
        break
      }
      default:
        break
    }
  }*/
  /*useEffect(() => {
    //console.log("hihi");
    subscribeToMore({
      document: CHATS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev
        const newChat = subscriptionData.data.chat.data
        if ((newChat.sent === sent && newChat.receive === receive) || (newChat.sent === receive && newChat.receive === sent))
          return {
            ...prev,
            chats: [...prev.chats, newChat]
          };
        else
          return prev
      }
    })
  }, [subscribeToMore, sent, receive])

  /*useEffect(() => {
    subscribeToMore({
      document: DELETE_SUBSCIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if(!subscriptionData.data) return prev
        return {
          ...prev,
          chats: [...prev.chats.filter((e) => {
            if(e.sent === subscriptionData.data.deletechats.sent)
              return false
            return true
          })]
        }
      }
    })
  }, [subscribeToMore])

  useEffect(() => {
    subscribeToMore({
      document: CHATS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        console.log('hi')
        if (renewal && sent && receive)
          refetch({
            variables: {
              sent: sent,
              receive: receive
            }
          });
      }
    })
  }, [subscribeToMore, refetch, renewal, sent, receive])*/
export default useChat


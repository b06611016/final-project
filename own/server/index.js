import express from 'express'
import { GraphQLServer, PubSub } from 'graphql-yoga'
import { Query } from './resolvers/Query'
import { Mutation } from './resolvers/Mutation'
import { Subscription } from './resolvers/Subscription'
require('dotenv-defaults').config()

const http = require('http')
//const express = require('express')
const mongoose = require('mongoose')
const WebSocket = require('ws')
const pubsub = new PubSub()

const Message = require('./models/message')

/*const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query
  },
  content: {
    pubsub
  }
});
server.applyMiddleware({ app })*/
let database = [];
const server = new GraphQLServer({
  typeDefs: "./server/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Subscription
  },
  context: {
    database,
    pubsub
  }
})

if (!process.env.MONGO_URL) {
  console.error('Missing MONGO_URL!!!')
  process.exit(1)
}

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

//const wss = new WebSocket.Server({ server })

db.on('error', (error) => {
  console.error(error)
})

db.once('open', async () => {
  console.log('MongoDB connected!')

  /*wss.on('connection', ws => {
    const sendData = (data) => {
      ws.send(JSON.stringify(data))
    }

    const sendStatus = (s) => {
      sendData(['status', s])
    }

    Message.find()
      .limit(100)
      .sort({ _id: 1 })
      .exec((err, res) => {
        if (err) throw err

        // initialize app with existing messages
        sendData(['init', res])
      })

    ws.onmessage = (message) => {
      const { data } = message
      console.log(data)
      const [task, payload] = JSON.parse(data)

      switch (task) {
        case 'input': {
          // TODO
          const { name, body } = payload;
          Message.create({
            name: name,
            body: body
          });
          sendData(['output', { name: name, body: body }]);
          break
        }
        case 'clear': {
          Message.deleteMany({}, () => {
            sendData(['cleared'])

            sendStatus({
              type: 'info',
              msg: 'Message cache cleared.'
            })
          })

          break
        }
        default:
          break
      }
    }
  })*/
  //console.log(database);
  let data = [...await Message.find().sort({ _id: 1 })]
  data = data.map((e) => {
    return { sent: e.sent, receive: e.receive, body: e.body }
  })
  database.push(...data);
  console.log(database)
  const PORT = process.env.port || 4000
  //app.get('/', (req, res) => res.send('hello world'))

  server.start(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
  })
})

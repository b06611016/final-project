import express from 'express'
import { GraphQLServer, PubSub } from 'graphql-yoga'
import { Query } from './resolvers/Query'
import { Mutation } from './resolvers/Mutation'
import data from './db'
//import { Subscription } from './resolvers/Subscription'
require('dotenv-defaults').config()

const http = require('http')
//const express = require('express')
const mongoose = require('mongoose')
const WebSocket = require('ws')
const pubsub = new PubSub()

const Account = require('./models/account')

const server = new GraphQLServer({
  typeDefs: "./server/schema.graphql",
  resolvers: {
    Query,
    Mutation
  },
  context: {
    data,
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

db.on('error', (error) => {
  console.error(error)
})

db.once('open', async () => {
  console.log('MongoDB connected!')

  const PORT = process.env.port || 4000

  server.start(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
  })
})


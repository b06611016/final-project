const { GraphQLServer, PubSub } = require('graphql-yoga')

const Message = require('./db.js')
const resolvers = require('./resolvers/index.js')

require('dotenv-defaults').config()

const pubsub = new PubSub()
const server = new GraphQLServer({
    typeDefs: './server/schema.graphql',
    resolvers: resolvers,
    context: {
        Message,
        pubsub
    }
})

const PORT = process.env.port || 4000

server.start({ port: PORT }, () => {
    console.log(`The server is up on port ${PORT}!`)
})

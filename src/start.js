import {MongoClient, ObjectId} from 'mongodb'
import express from 'express'
import bodyParser from 'body-parser'
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express'
import {makeExecutableSchema} from 'graphql-tools'
import cors from 'cors'

import { typeDefs } from './type-defs';
import { resolversSchema } from './resolvers';

const URL = 'http://localhost'
const PORT = 3001
const MONGO_URL = 'mongodb://localhost:27017/blog'


export const start = async () => {
  try {

    const resolvers = await resolversSchema();

    const schema = makeExecutableSchema({
      typeDefs,
      resolvers
    })

    const app = express()

    app.use(cors())

    app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

    const homePath = '/graphiql'

    app.use(homePath, graphiqlExpress({
      endpointURL: '/graphql'
    }))

    app.listen(PORT, () => {
      console.log(`Visit ${URL}:${PORT}${homePath}`)
    })

  } catch (e) {
    console.log('errrrorrr', e)
  }

}

import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';

import { typeDefs } from './type-defs';
import { resolversSchema } from './resolvers';

const URL = 'http://localhost';
const PORT = 3001;


export const start = async () => {
  try {
    const resolvers = await resolversSchema();

    const schema = makeExecutableSchema({
      typeDefs,
      resolvers,
    });

    const app = express();

    app.use(cors());

    app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

    const homePath = '/graphiql';

    app.use(homePath, graphiqlExpress({
      endpointURL: '/graphql',
    }));

    app.listen(PORT, () => {
      /* eslint-disable no-console */
      console.log(`Visit ${URL}:${PORT}${homePath}`);
    });
  } catch (e) {
    /* eslint-disable no-console */
    console.log('errrrorrr->', e);
  }
};

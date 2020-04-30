const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');

import {
  // mutationType,
  queryType,
} from '../types';

const schema = new GraphQLSchema({
  query: queryType,
  // mutation: mutationType,
});

app.use(
  '/api/graphql',
  graphqlHTTP({
    schema,
    graphiql: false,
    // rootValue: resolvers,
  })
);

// app.get('/api/graphql', async (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
//   const data = await getData();
//   await res.json(data);
// })

export default app;

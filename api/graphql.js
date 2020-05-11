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
});

app.use(
  '/api/graphql',
  graphqlHTTP({
    schema,
    graphiql: false,
  })
);

export default app;

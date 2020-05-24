import express from 'express';
import { queryType } from '../../types';

const app = express();
const graphqlHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');

const schema = new GraphQLSchema({
  query: queryType,
});

app.use(
  '/api/graphiql/',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

export default app;

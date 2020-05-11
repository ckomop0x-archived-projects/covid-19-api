const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const {
  GraphQLSchema,
} = require('graphql');

import {
  queryType
} from "../types";

const schema = new GraphQLSchema({
  query: queryType,
});

app.use(
  '/api/graphiql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

export default app;

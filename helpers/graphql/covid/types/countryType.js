import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { globalIdField } from 'graphql-relay';
import { nodeInterface } from '../getDefinitions';

export const countryType = new GraphQLObjectType({
  name: 'Country',
  description: 'Country with Covid-19 cases.',
  fields: {
    id: globalIdField(),
    name: {
      type: GraphQLString,
      description: 'The name of the country',
    },
    totalConfirmed: {
      type: GraphQLInt,
      description: 'Total confirmed cases'
    },
    totalDeaths: {
      type: GraphQLInt,
      description: 'Total deaths cases'
    },
    totalRecovered: {
      type: GraphQLInt,
      description: 'Total recovered people'
    }
  },
  interfaces: [nodeInterface],
});

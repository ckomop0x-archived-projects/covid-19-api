import { countryType } from './countryType'

import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { connectionArgs, connectionDefinitions, connectionFromPromisedArray, globalIdField } from "graphql-relay";
// import { nodeInterface } from "../getDefinitions";
import { nodeField, nodeInterface } from "../getDefinitions";
import { getCountries } from "../getCountries";
import { getCountryById } from "../getCountryById";

export const { connectionType: CountryConnection } = connectionDefinitions({
  nodeType: countryType,
  connectionFields: () => ({
    totalCount: {
      type: GraphQLInt,
      description: 'A total number of objects in this connection.',
      resolve: (connection) => connection.edges.length
    }
  })
})

export const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type.',
  fields: {
    node: nodeField,
    countries: {
      type: CountryConnection,
      args: connectionArgs,
      resolve: (_, args) => connectionFromPromisedArray(
        getCountries(),
        args
      )
    },
    country: {
      type: countryType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'The id of the country.',
        },
      },
      resolve: (_, args) => {
        return getCountryById(args.id);
      },
    },
  },
});

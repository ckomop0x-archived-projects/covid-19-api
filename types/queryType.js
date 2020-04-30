import { connectionArgs, connectionDefinitions, connectionFromPromisedArray } from "graphql-relay";
import { countryType } from "./countryType";
import { GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { nodeField } from "../helpers/graphql/covid/getDefinitions";
import { getCountries } from "../helpers/graphql/covid/getCountries";
import { getCountryByName } from "../helpers/graphql/covid/getCountryByName";

export const { connectionType: CountryConnection } = connectionDefinitions({
  nodeType: countryType,
  connectionFields: () => ({
    totalCount: {
      type: GraphQLInt,
      description: 'A total number of countries with COVID-19 cases.',
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
        name: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'The name of the country.',
        },
      },
      resolve: async (_, args) => {
        console.log(args.name)
        const country = await getCountryByName(args.name)
        console.log(country)

        return country;
      },
    },
  },
});

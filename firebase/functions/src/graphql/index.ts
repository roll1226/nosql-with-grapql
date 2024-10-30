import { ApolloServer } from "@apollo/server";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

/**
 * Create a new ApolloServer instance with the type definitions and resolvers
 *
 * @memberof ApolloServer
 * @name ApolloServer
 * @param {Object} typeDefs - The type definitions
 * @param {Object} resolvers - The resolvers
 * @param {boolean} introspection - Enable introspection
 * @returns {Object} - The ApolloServer instance
 */
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

export default server;

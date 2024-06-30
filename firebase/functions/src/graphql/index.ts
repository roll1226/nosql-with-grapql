import { ApolloServer } from "apollo-server-express";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

export default server;

import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    getUser(id: String!): User!
    getUsers: [User]!
  }

  type User {
    id: String
    name: String
    email: String
  }
`;

export default typeDefs;

import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    getUser(id: String!): User!
    getUsers: [User]!
  }

  type Mutation {
    addUser(name: String!, email: String!): User
    updateUser(id: String!, name: String, email: String): User
    deleteUser(id: String!): Boolean
  }

  type User {
    id: String
    name: String
    email: String
  }
`;

export default typeDefs;

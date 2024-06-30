import { ApolloServer, gql } from "apollo-server-express";
import express, { Express } from "express";
import * as admin from "firebase-admin";
import { onRequest } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";

initializeApp();
const app: Express = express();
const db = admin.firestore();

const typeDefs = gql`
  type Query {
    getUser(id: String!): User
  }

  type User {
    id: String
    name: String
    email: String
  }
`;

const resolvers = {
  Query: {
    getUser: async (_: unknown, { id }: { id: string }) => {
      const userRef = db.collection("users").doc(id);
      const doc = await userRef.get();
      if (!doc.exists) {
        throw new Error("User not found");
      }
      return { id: doc.id, ...doc.data() };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

server.start().then(() => {
  server.applyMiddleware({ app: app as never, path: "/" });
});

exports.graphql = onRequest(app);

import { initializeApp } from "firebase-admin/app";
initializeApp();

import express from "express";
import { onRequest } from "firebase-functions/v2/https";
import { expressMiddleware } from "@apollo/server/express4";
import server from "./graphql";

const app = express();

/**
 * Start the ApolloServer
 *
 * @returns {Promise<void>}
 * @memberof ApolloServer
 * @name start
 * @param {void}
 * @returns {Promise<void>}
 * @example
 * server.start().then(() => {
 *  app.use("/", expressMiddleware(server));
 * });
  */
server.start().then(() => {
  app.use("/", expressMiddleware(server));
});

exports.graphql = onRequest(app);

import { initializeApp } from "firebase-admin/app";
initializeApp();

import express from "express";
import { onRequest } from "firebase-functions/v2/https";
import { expressMiddleware } from "@apollo/server/express4";
import server from "./graphql";

const app = express();

server.start().then(() => {
  app.use("/", expressMiddleware(server));
});

exports.graphql = onRequest(app);

import { initializeApp } from "firebase-admin/app";
initializeApp();

import express, { Express } from "express";
import { onRequest } from "firebase-functions/v2/https";
import server from "./graphql";

const app: Express = express();

server.start().then(() => {
  server.applyMiddleware({ app: app as never, path: "/" });
});

exports.graphql = onRequest(app);

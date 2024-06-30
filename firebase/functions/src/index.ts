import { initializeApp } from "firebase-admin/app";
initializeApp();

import express from "express";
import { onRequest } from "firebase-functions/v2/https";
import server from "./graphql";

const app = express();

server.start().then(() => {
  server.applyMiddleware({ app: app as never, path: "/" });
});

exports.graphql = onRequest(app);

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { env } from "./env/dotEnv.ts";
import "./index.css";

const client = new ApolloClient({
  uri: env.getSupabaseGraphQLEndpoint(),
  headers: {
    apiKey: env.getSupabaseApiKey(),
  },
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

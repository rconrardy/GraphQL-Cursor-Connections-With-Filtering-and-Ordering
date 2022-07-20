import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import { readFileSync } from "fs";
import http from "http";
import { resolvers } from "./resolvers/resolvers";

/**
 * Run the application
 *
 * @param port - The port to run the application on
 *
 * @returns void
 */
export const runApplication = async (port: number): Promise<void> => {
  // Define the type definitions
  const typeDefs = gql(readFileSync("./schema.graphql", "utf8"));

  // Create the {Express} application
  const app = express();

  // Create the {http.Server}
  const httpServer = http.createServer(app);

  // Create the {ApolloServer}
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
  });

  // Start the {ApolloServer}
  await server.start();

  // Apply the {Express} application to the {ApolloServer} middleware
  server.applyMiddleware({ app });

  // Listen on the specified port
  await new Promise((resolve, reject) => {
    httpServer.listen(port).once("listening", resolve).once("error", reject);
  });
};

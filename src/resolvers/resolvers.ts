import { Resolvers } from "../../resolvers-types";
import { Context } from "../types/Context";
import { queryResolvers } from "./query/queryResolvers";
import { userResolvers } from "./user/userResolvers";

// Define the {Resolvers}
export const resolvers: Resolvers<Context> = {
  Query: queryResolvers,
  User: userResolvers,
};

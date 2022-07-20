import { QueryResolvers } from "../../../resolvers-types";
import { Context } from "../../types/Context";
import { queryResolversUsers } from "./queryResolvers.users";

// Define the {QueryResolvers}
export const queryResolvers: QueryResolvers<Context> = {
  users: queryResolversUsers,
};

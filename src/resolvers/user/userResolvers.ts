import { UserResolvers } from "../../../resolvers-types";
import { Context } from "../../types/Context";
import { userResolversResolveReference } from "./userResolvers.resolveReference";

// Define the {UserResolvers}
export const userResolvers: UserResolvers<Context> = {
  __resolveReference: userResolversResolveReference,
};

import { OrderByDirection, QueryResolvers } from "../../../resolvers-types";
import { createUserConnection } from "../../connections/user/createUserConnection";
import { decodeObject } from "../../helpers/base64/decodeObject";
import { getUsers } from "../../services/user/getUsers";
import { Context } from "../../types/Context";
import { UserQueryOptions } from "../../types/UserQueryOptions";

// Define the {DEFAULT_PAGE_SIZE}
const DEFAULT_PAGE_SIZE = 10;

// Define the {DEFAULT_ORDER_BY}
const DEFAULT_ORDER_BY = { createdAt: OrderByDirection.Descending };

/**
 * Get the {User}s
 *
 * @param _
 * @param args - The {QueryUsersArgs}
 *
 * @returns The {User}s
 */
export const queryResolversUsers: QueryResolvers<Context>["users"] = async (
  _,
  args
) => {
  // Parse the {QueryUsersArgs} into {UserQueryOptions}
  const options: UserQueryOptions = {
    after: args.after ? decodeObject(args.after) : undefined,
    filterBy: args.filterBy ?? undefined,
    first: (args.first ?? DEFAULT_PAGE_SIZE) + 1,
    orderBy: args.orderBy ? args.orderBy : DEFAULT_ORDER_BY,
  };

  // Get the {User}s
  const users = await getUsers(options);

  // Create the {Connection}
  return createUserConnection(users, options);
};

import {
  OrderByDirection,
  QueryResolvers,
  UserOrderBy,
} from "../../../resolvers-types";
import { createUserConnection } from "../../connections/user/createUserConnection";
import { decodeObject } from "../../helpers/base64/decodeObject";
import { getUsers } from "../../services/user/getUsers";
import { Context } from "../../types/Context";
import { UserCursor } from "../../types/UserCursor";

// Define the {DEFAULT_PAGE_SIZE}
const DEFAULT_PAGE_SIZE = 10;

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
  // Parse the {QueryUsersArgs}
  const limit = (args.first ?? DEFAULT_PAGE_SIZE) + 1;
  const cursor = args.after ? decodeObject<UserCursor>(args.after) : undefined;
  const filterBy = args.filterBy;
  const orderBy: UserOrderBy = args.orderBy
    ? args.orderBy
    : { createdAt: OrderByDirection.Descending };

  // Get the {User}s
  const options = { filterBy, cursor, limit, orderBy };
  const users = await getUsers(options);

  // Create the {Connection}
  return createUserConnection(users, options);
};

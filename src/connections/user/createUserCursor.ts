import { User } from "@prisma/client";
import { UserOrderBy, InputMaybe } from "../../../resolvers-types";
import { UserCursor } from "../../types/UserCursor";

type Key = keyof Omit<UserOrderBy, "then">;

/**
 * Create {UserConnection}
 *
 * @param node - The {User}
 * @param options - Options that specify the query
 *
 * @returns The created {UserCursor}
 */
export const createUserCursor = (
  node: Pick<User, Key | "id">,
  options: { orderBy?: InputMaybe<UserOrderBy> }
): UserCursor => ({
  node: {
    __typename: "User",
    id: node.id,
    createdAt: node.createdAt,
    isAdmin: node.isAdmin,
    name: node.name,
    points: node.points,
  },
  orderBy: options.orderBy,
});

import { User } from "@prisma/client";
import { UserOrderBy, InputMaybe } from "../../../resolvers-types";
import { encodeObject } from "../../helpers/base64/encodeObject";
import { UserEdge } from "../../types/Mappers";
import { UserQueryOptions } from "../../types/UserQueryOptions";
import { createUserCursor } from "./createUserCursor";

type Key = keyof Omit<UserOrderBy, "then">;

/**
 * Create the {UserEdge}
 *
 * @param node - The {User}
 * @param options - The {UserQueryOptions}
 *
 * @returns The created {UserEdge}
 */
export const createUserEdge = (
  node: Pick<User, Key | "id">,
  options: UserQueryOptions
): UserEdge => ({
  cursor: encodeObject(createUserCursor(node, options)),
  node,
});

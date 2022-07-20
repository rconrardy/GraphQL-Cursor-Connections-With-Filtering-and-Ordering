import { User } from "@prisma/client";
import { UserOrderBy, InputMaybe } from "../../../resolvers-types";
import { UserCursor } from "../../types/UserCursor";
import { UserConnection } from "../../types/Mappers";
import { createPageInfo } from "../createPageInfo";
import { createUserEdge } from "./createUserEdge";

/**
 * Create the {UserConnection}
 *
 * @param entities - The {User}s that will be converted to {UserEdge}s
 * @param options - Options that specify the shape of the query
 *
 * @returns The created {UserConnection}
 */
export const createUserConnection = (
  entities: User[],
  options: {
    cursor?: InputMaybe<UserCursor>;
    limit?: number;
    orderBy?: InputMaybe<UserOrderBy>;
  }
): UserConnection => {
  const hasNextPage = entities.length === options.limit;
  const hasPreviousPage = options.cursor !== undefined;
  const nodes = hasNextPage ? entities.slice(0, -1) : entities;

  // Create the {Edge}s
  const edges = nodes.map((node) => createUserEdge(node, options));

  // Create the {PageInfo}
  const pageInfo = createPageInfo(edges, hasNextPage, hasPreviousPage);

  // Create the {UserConnection}
  return { edges, pageInfo };
};

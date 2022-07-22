import { User } from "@prisma/client";
import { UserConnection } from "../../types/Mappers";
import { UserQueryOptions } from "../../types/UserQueryOptions";
import { createPageInfo } from "../createPageInfo";
import { createUserEdge } from "./createUserEdge";

/**
 * Create the {UserConnection}
 *
 * @param entities - The {User}s
 * @param options - The {UserQueryOptions}
 *
 * @returns The created {UserConnection}
 */
export const createUserConnection = (
  entities: User[],
  options: UserQueryOptions
): UserConnection => {
  const hasNextPage = entities.length === options.first;
  const hasPreviousPage = options.after !== undefined;
  const nodes = hasNextPage ? entities.slice(0, -1) : entities;

  // Create the {Edge}s
  const edges = nodes.map((node) => createUserEdge(node, options));

  // Create the {PageInfo}
  const pageInfo = createPageInfo(edges, hasNextPage, hasPreviousPage);

  // Create the {UserConnection}
  return { edges, pageInfo };
};

import { User, Prisma } from "@prisma/client";
import {
  UserOrderBy,
  InputMaybe,
  OrderByDirection,
} from "../../../../resolvers-types";
import { UserCursor } from "../../../types/UserCursor";

type Key = keyof Omit<UserOrderBy, "then">;

type Value = User[Key];

/**
 * Map the  {UserCursor} to {Prisma.UserWhereInput}
 *
 * @param cursor - The {UserCursor}
 * @param seenNodeEntries - {User} entries that have been seen in previous recursive calls
 *
 * @returns The {Prisma.UserWhereInput}
 *
 * @throws {Error} If the {UserOrderBy} does not contain exactly one entry
 */
export const mapUserCursorToPrismaWhereInput = (
  cursor?: InputMaybe<UserCursor>,
  seenNodeEntries: [key: Key, value: Value][] = []
): Prisma.UserWhereInput => {
  // Base Case #1: If {UserCursor} is null or undefined, return {}
  if (!cursor) return {};

  // Base Case #2: If {UserOrderBy} is null or undefined, return { AND: [{ id: { lt: cursor.node.id } }] }
  if (!cursor.orderBy) return { AND: [{ id: { lt: cursor.node.id } }] };

  // Filter {UserOrderBy} entries to valid {UserOrderBy} options
  const orderByEntries = Object.entries(cursor.orderBy).filter(
    (e): e is [key: Key, value: OrderByDirection] => e[0] !== "then" && !!e[1]
  );

  // If there is not exactly one {UserOrderBy} entry, throw an {Error}
  if (orderByEntries.length !== 1) {
    throw new Error("{UserCursor} is invalid");
  }

  // Create the {Prisma.UserWhereInput}
  const key = orderByEntries[0][0];
  const nodeValue = cursor.node[key];
  const isNull = nodeValue === null;
  const isAscending = orderByEntries[0][1] === OrderByDirection.Ascending;
  return {
    OR: [
      isNull
        ? { [key]: { not: nodeValue } }
        : { [key]: isAscending ? { gt: nodeValue } : { lt: nodeValue } },
      {
        AND: [
          { [key]: { equals: nodeValue } },
          ...seenNodeEntries.map((e) => ({ [e[0]]: { equals: e[1] } })),
          mapUserCursorToPrismaWhereInput(
            { ...cursor, orderBy: cursor.orderBy.then },
            [...seenNodeEntries, [key, nodeValue]]
          ),
        ],
      },
    ],
  };
};

import { Prisma } from "@prisma/client";
import {
  InputMaybe,
  OrderByDirection,
  UserOrderBy,
} from "../../../../resolvers-types";
import { mapOrderByDirectionToPrismaSortOrder } from "../../order-by/mapOrderByDirectionToPrismaSortOrder";

type Key = keyof Omit<UserOrderBy, "then">;

/**
 * Map the {UserOrderBy} to {Prisma.UserOrderByWithRelationInput}
 *
 * @param orderBy - The {UserOrderBy}
 *
 * @returns The mapped {Prisma.UserOrderByWithRelationInput}
 */
export const mapUserOrderByToPrismaOrderByWithRelationInputs = (
  orderBy?: InputMaybe<UserOrderBy>
): Prisma.UserOrderByWithRelationInput[] => {
  // Base Case #1: If {UserOrderBy} is null or undefined return { id: "desc" }
  if (!orderBy) return [{ id: "desc" }];

  // Filter {UserOrderBy} entries to valid options
  const orderByEntries = Object.entries(orderBy).filter(
    (e): e is [key: Key, value: OrderByDirection] => e[0] !== "then" && !!e[1]
  );

  // If there is not exactly one {UserOrderBy} entry, throw an {Error}
  if (orderByEntries.length !== 1) {
    throw new Error("{UserOrderBy} is invalid");
  }

  // Get the {UserOrderBy} entry
  const orderByEntry = orderByEntries[0];

  // Recursively map {UserOrderBy} to {Prisma.UserOrderByWithRelationInput}
  return [
    {
      [orderByEntry[0]]: mapOrderByDirectionToPrismaSortOrder(orderByEntry[1]),
    },
    ...mapUserOrderByToPrismaOrderByWithRelationInputs(orderBy?.then),
  ];
};

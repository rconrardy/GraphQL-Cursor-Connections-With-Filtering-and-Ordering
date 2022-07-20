import { prismaClient } from "../..";
import {
  InputMaybe,
  UserFilterBy,
  UserOrderBy,
} from "../../../resolvers-types";
import { mapUserCursorToPrismaWhereInput } from "../../mappers/user/cursor/mapUserCursorToPrismaWhereInput";
import { mapUserFilterByToPrismaWhereInput } from "../../mappers/user/filter-by/mapUserFilterByToPrismaWhereInput";
import { mapUserOrderByToPrismaOrderByWithRelationInputs } from "../../mappers/user/order-by/mapUserOrderByToPrismaOrderByWithRelationInputs";
import { UserCursor } from "../../types/UserCursor";

/**
 * Get the {User}s
 *
 * @param options - Options that specify the shape of the query
 *
 * @returns The {User}s
 */
export const getUsers = async (options?: {
  filterBy?: InputMaybe<UserFilterBy>;
  cursor?: UserCursor;
  limit?: number;
  orderBy?: InputMaybe<UserOrderBy>;
}) =>
  await prismaClient.user.findMany({
    where: {
      AND: [
        mapUserFilterByToPrismaWhereInput(options?.filterBy),
        mapUserCursorToPrismaWhereInput(options?.cursor),
      ],
    },
    take: options?.limit,
    orderBy: mapUserOrderByToPrismaOrderByWithRelationInputs(options?.orderBy),
  });

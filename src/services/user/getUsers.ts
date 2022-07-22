import { prismaClient } from "../..";
import { mapUserCursorToPrismaWhereInput } from "../../mappers/user/cursor/mapUserCursorToPrismaWhereInput";
import { mapUserFilterByToPrismaWhereInput } from "../../mappers/user/filter-by/mapUserFilterByToPrismaWhereInput";
import { mapUserOrderByToPrismaOrderByWithRelationInputs } from "../../mappers/user/order-by/mapUserOrderByToPrismaOrderByWithRelationInputs";
import { UserQueryOptions } from "../../types/UserQueryOptions";

/**
 * Get the {User}s
 *
 * @param options - The {UserQueryOptions}
 *
 * @returns The {User}s
 */
export const getUsers = async (options?: UserQueryOptions) =>
  await prismaClient.user.findMany({
    where: {
      AND: [
        mapUserFilterByToPrismaWhereInput(options?.filterBy),
        mapUserCursorToPrismaWhereInput(options?.after),
      ],
    },
    take: options?.first,
    orderBy: mapUserOrderByToPrismaOrderByWithRelationInputs(options?.orderBy),
  });

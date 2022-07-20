import { User } from "@prisma/client";
import { UserResolvers } from "../../../resolvers-types";
import { getUserByIdOrFail } from "../../services/user/getUserByIdOrFail";

/**
 * Resolve the {User} reference
 *
 * @param reference - The {User} reference
 *
 * @returns The {User}
 *
 * @throws {Error} If the {User} is not found
 */
export const userResolversResolveReference: UserResolvers["__resolveReference"] =
  async (reference: { id: string }): Promise<User> =>
    getUserByIdOrFail(reference.id);

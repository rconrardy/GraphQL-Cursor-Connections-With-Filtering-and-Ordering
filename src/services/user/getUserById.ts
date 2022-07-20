import { User } from "@prisma/client";
import { prismaClient } from "../..";

/**
 * Get the {User} by ID
 *
 * @param id - The {User} ID
 *
 * @returns The {User}
 */
export const getUserById = async (id: string): Promise<User | null> =>
  await prismaClient.user.findUnique({ where: { id } });

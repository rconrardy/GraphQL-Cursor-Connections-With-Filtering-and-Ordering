import { User } from "@prisma/client";
import { getUserById } from "./getUserById";

/**
 * Get the {User} by ID or throw {Error}
 *
 * @param id - The {User} ID
 *
 * @returns The {User}
 *
 * @throws {Error} If the {User} is not found
 */
export const getUserByIdOrFail = async (id: string): Promise<User> => {
  // Get the {User} by ID
  const user = await getUserById(id);

  // If the {User} is not defined, throw an {Error}
  if (!user) throw new Error("User not found");

  // Return the {User}
  return user;
};

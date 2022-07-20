import { Prisma } from "@prisma/client";
import { InputMaybe, UserFilterBy } from "../../../../resolvers-types";
import { mapFilterByBooleanToPrismaBooleanFilter } from "../../filter-by/mapFilterByBooleanToPrismaBooleanFilter";
import { mapFilterByDateToPrismaDateTimeFilter } from "../../filter-by/mapFilterByDateToPrismaDateTimeFilter";
import { mapFilterByIdToPrismaStringFilter } from "../../filter-by/mapFilterByIdToPrismaStringFilter";
import { mapFilterByIntToPrismaIntFilter } from "../../filter-by/mapFilterByIntToPrismaIntFilter";
import { mapFilterByStringToPrismaStringFilter } from "../../filter-by/mapFilterByStringToPrismaStringFilter";

/**
 * Map the {UserFilterBy} to {Prisma.UserWhereInput}
 *
 * @param filterBy - The {UserFilterBy}
 *
 * @returns The {Prisma.UserWhereInput}
 */
export const mapUserFilterByToPrismaWhereInput = (
  filterBy?: InputMaybe<UserFilterBy>
): Prisma.UserWhereInput => ({
  AND: filterBy?.and?.map((andInput) =>
    mapUserFilterByToPrismaWhereInput(andInput)
  ),
  OR: filterBy?.or?.map((orInput) =>
    mapUserFilterByToPrismaWhereInput(orInput)
  ),
  id: mapFilterByIdToPrismaStringFilter(filterBy?.id),
  name: mapFilterByStringToPrismaStringFilter(filterBy?.name),
  points: mapFilterByIntToPrismaIntFilter(filterBy?.points),
  createdAt: mapFilterByDateToPrismaDateTimeFilter(filterBy?.createdAt),
  isAdmin: mapFilterByBooleanToPrismaBooleanFilter(filterBy?.isAdmin),
});

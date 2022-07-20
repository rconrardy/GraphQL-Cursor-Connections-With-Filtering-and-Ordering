import { Prisma } from "@prisma/client";
import { FilterById, InputMaybe, Maybe } from "../../../resolvers-types";
import { Optional } from "../../types/Optional";

/**
 * Map {Maybe<Maybe<string>[]>} to {Optional<string[]>}
 *
 * @param strs - The {Maybe<Maybe<string>[]>}
 *
 * @returns The {Optional<string[]>}
 */
const mapMaybeStringListToOptionalStringList = (
  strs?: Maybe<Maybe<string>[]>
): Optional<string[]> => {
  if (!strs) return undefined;
  return strs.filter((str): str is string => !!str);
};

/**
 * Map {FilterById} to {Prisma.StringFilter}
 *
 * @param value - The {FilterById}
 *
 * @returns - The {Prisma.StringFilter}
 */
export const mapFilterByIdToPrismaStringFilter = (
  value?: InputMaybe<FilterById>
): Prisma.StringFilter => ({
  contains: value?.contains ?? undefined,
  endsWith: value?.endsWith ?? undefined,
  equals: value?.equals ?? undefined,
  gt: value?.gt ?? undefined,
  gte: value?.gte ?? undefined,
  in: mapMaybeStringListToOptionalStringList(value?.in),
  lt: value?.lt ?? undefined,
  lte: value?.lte ?? undefined,
  mode: (value?.mode ?? undefined) as "default" | "insensitive" | undefined,
  not: value?.not ?? undefined,
  notIn: mapMaybeStringListToOptionalStringList(value?.notIn),
  startsWith: value?.startsWith ?? undefined,
});

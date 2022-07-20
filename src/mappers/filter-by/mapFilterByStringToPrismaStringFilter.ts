import { Prisma } from "@prisma/client";
import { FilterByString, InputMaybe, Maybe } from "../../../resolvers-types";
import { Optional } from "../../types/Optional";

/**
 * Map {Maybe<string>} to {Optional<string>}
 *
 * @param str - The {Maybe<string>}
 *
 * @returns The {Optional<string>}
 */
const mapMaybeStringToOptionalString = (
  str?: Maybe<string>
): Optional<string> => {
  if (str === undefined || str === null) return undefined;
  return str;
};

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
 * Map {FilterByString} to {Prisma.StringFilter}
 *
 * @param value - The {FilterByString}
 *
 * @returns - The {Prisma.StringFilter}
 */
export const mapFilterByStringToPrismaStringFilter = (
  value?: InputMaybe<FilterByString>
): Prisma.StringFilter => ({
  contains: mapMaybeStringToOptionalString(value?.contains),
  endsWith: mapMaybeStringToOptionalString(value?.endsWith),
  equals: mapMaybeStringToOptionalString(value?.equals),
  gt: mapMaybeStringToOptionalString(value?.gt),
  gte: mapMaybeStringToOptionalString(value?.gte),
  in: mapMaybeStringListToOptionalStringList(value?.in),
  lt: mapMaybeStringToOptionalString(value?.lt),
  lte: mapMaybeStringToOptionalString(value?.lte),
  mode: (value?.mode ?? undefined) as "default" | "insensitive" | undefined,
  not: mapMaybeStringToOptionalString(value?.not),
  notIn: mapMaybeStringListToOptionalStringList(value?.in),
  startsWith: mapMaybeStringToOptionalString(value?.startsWith),
});

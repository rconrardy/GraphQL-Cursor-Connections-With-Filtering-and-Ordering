import { Prisma } from "@prisma/client";
import { FilterByDate, InputMaybe, Maybe } from "../../../resolvers-types";
import { Optional } from "../../types/Optional";

/**
 * Map {Maybe<string>} to {Optional<Date>}
 *
 * @param str - The {Maybe<string>}
 *
 * @returns The {Optional<Date>}
 */
const mapMaybeStringToOptionalDate = (str?: Maybe<string>): Optional<Date> => {
  if (!str) return undefined;
  return new Date(str);
};

/**
 * Map {Maybe<Maybe<string>[]>} to {Optional<Date[]>}
 *
 * @param strs - The {Maybe<Maybe<string>[]>}
 *
 * @returns The {Optional<Date[]>}
 */
const mapMaybeStringListToOptionalDateList = (
  strs?: Maybe<Maybe<string>[]>
): Optional<Date[]> => {
  if (!strs) return undefined;
  return strs.filter((str): str is string => !!str).map((str) => new Date(str));
};

/**
 * Map {FilterByDate} to {Prisma.DateTimeFilter}
 *
 * @param value - The {FilterByDate}
 *
 * @returns - The {Prisma.DateTimeFilter}
 */
export const mapFilterByDateToPrismaDateTimeFilter = (
  value?: InputMaybe<FilterByDate>
): Prisma.DateTimeFilter => ({
  equals: mapMaybeStringToOptionalDate(value?.equals),
  gt: mapMaybeStringToOptionalDate(value?.gt),
  gte: mapMaybeStringToOptionalDate(value?.gte),
  in: mapMaybeStringListToOptionalDateList(value?.in),
  lt: mapMaybeStringToOptionalDate(value?.lt),
  lte: mapMaybeStringToOptionalDate(value?.lte),
  not: mapMaybeStringToOptionalDate(value?.not),
  notIn: mapMaybeStringListToOptionalDateList(value?.notIn),
});

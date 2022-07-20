import { Prisma } from "@prisma/client";
import { FilterByInt, InputMaybe, Maybe } from "../../../resolvers-types";
import { Optional } from "../../types/Optional";

/**
 * Map {Maybe<number>} to {Optional<number>}
 *
 * @param num - The {Maybe<number>}
 *
 * @returns The {Optional<number>}
 */
const mapMaybeNumberToOptionalNumber = (
  num?: Maybe<number>
): Optional<number> => {
  if (num === undefined || num === null) return undefined;
  return num;
};

/**
 * Map {Maybe<Maybe<number>[]>} to {Optional<number[]>}
 *
 * @param nums - The {Maybe<Maybe<number>[]>}
 *
 * @returns The {Optional<number[]>}
 */
const mapMaybeNumberListToOptionalNumberList = (
  nums?: Maybe<Maybe<number>[]>
): Optional<number[]> => {
  if (!nums) return undefined;
  return nums.filter((num): num is number => !!num);
};

/**
 * Map {FilterByInt} to {Prisma.IntFilter}
 *
 * @param value - The {FilterByInt}
 *
 * @returns - The {Prisma.IntFilter}
 */
export const mapFilterByIntToPrismaIntFilter = (
  value?: InputMaybe<FilterByInt>
): Prisma.IntFilter => ({
  equals: mapMaybeNumberToOptionalNumber(value?.equals),
  gt: mapMaybeNumberToOptionalNumber(value?.gt),
  gte: mapMaybeNumberToOptionalNumber(value?.gte),
  in: mapMaybeNumberListToOptionalNumberList(value?.in),
  lt: mapMaybeNumberToOptionalNumber(value?.lt),
  lte: mapMaybeNumberToOptionalNumber(value?.lte),
  not: mapMaybeNumberToOptionalNumber(value?.not),
  notIn: mapMaybeNumberListToOptionalNumberList(value?.in),
});

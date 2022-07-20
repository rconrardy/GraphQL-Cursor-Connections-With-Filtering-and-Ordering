import { Prisma } from "@prisma/client";
import { FilterByBoolean, InputMaybe, Maybe } from "../../../resolvers-types";
import { Optional } from "../../types/Optional";

/**
 * Map {Maybe<string>} to {Optional<string>}
 *
 * @param bool - The {Maybe<string>}
 *
 * @returns The {Optional<string>}
 */
const mapMaybeBooleanToOptionalBoolean = (
  bool?: Maybe<boolean>
): Optional<boolean> => {
  if (bool === undefined || bool === null) return undefined;
  return bool;
};

/**
 * Map {FilterByBoolean} to {Prisma.BooleanFilter}
 *
 * @param value - The {FilterByBoolean}
 *
 * @returns - The {Prisma.BooleanFilter}
 */
export const mapFilterByBooleanToPrismaBooleanFilter = (
  value?: InputMaybe<FilterByBoolean>
): Prisma.BoolFilter => ({
  equals: mapMaybeBooleanToOptionalBoolean(value?.equals),
  not: mapMaybeBooleanToOptionalBoolean(value?.not),
});

import { InputMaybe, OrderByDirection } from "../../../resolvers-types";
import { Optional } from "../../types/Optional";

export const mapOrderByDirectionToPrismaSortOrder = (
  orderByDirection?: InputMaybe<OrderByDirection>
): Optional<"asc" | "desc"> => {
  switch (orderByDirection) {
    case OrderByDirection.Ascending:
      return "asc";
    case OrderByDirection.Descending:
      return "desc";
    default:
      return undefined;
  }
};

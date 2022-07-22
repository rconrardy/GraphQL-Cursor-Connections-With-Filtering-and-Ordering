import { UserFilterBy, UserOrderBy } from "../../resolvers-types";
import { Optional } from "./Optional";
import { UserCursor } from "./UserCursor";

export type UserQueryOptions = {
  after?: Optional<UserCursor>;
  filterBy?: Optional<UserFilterBy>;
  first?: Optional<number>;
  orderBy?: Optional<UserOrderBy>;
};

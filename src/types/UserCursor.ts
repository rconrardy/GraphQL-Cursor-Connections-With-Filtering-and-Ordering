import { User } from "@prisma/client";
import { InputMaybe, UserOrderBy } from "../../resolvers-types";

type Key = keyof Omit<UserOrderBy, "then">;

export type UserCursor = {
  node: Pick<User, Key> & { __typename: "User"; id: string };
  orderBy?: InputMaybe<UserOrderBy>;
};

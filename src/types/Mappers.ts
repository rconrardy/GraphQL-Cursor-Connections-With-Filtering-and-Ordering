import { User } from "@prisma/client";
import { PageInfo } from "../../resolvers-types";

export type UserConnection = {
  pageInfo: PageInfo;
  edges: UserEdge[];
};

export type UserEdge = {
  cursor: string;
  node: User;
};

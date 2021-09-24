import { gql } from "apollo-server";
export const commonsTypedefs = gql`
  type PageInfo {
    nextPageCursor: String
    hasNextPage: Boolean
  }
`;

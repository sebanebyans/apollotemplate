import { gql } from 'apollo-server';

const commonsTypedefs = gql`
  type PageInfo {
    nextPageCursor: String
    hasNextPage: Boolean
  }
`;

export = commonsTypedefs;

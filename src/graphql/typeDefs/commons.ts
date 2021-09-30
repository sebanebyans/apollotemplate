import { gql } from 'apollo-server';
 
const commonsTypedefs = gql`
  "Representa una página"
  type PageInfo {
    """Id del elemento siguiente a esta página"""
    nextPageCursor: String
    """Indica si existe hay siguiente página"""
    hasNextPage: Boolean
  }
`;

export = commonsTypedefs;

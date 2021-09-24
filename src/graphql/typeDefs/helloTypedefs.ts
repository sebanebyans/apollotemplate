import { gql } from "apollo-server";

export const helloTypedefs = gql`
  type Hello {
    name: String
  }

  extend type Query {
    getHello: [Hello]
  }

 
`;
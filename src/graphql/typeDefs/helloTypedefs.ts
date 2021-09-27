import { gql } from 'apollo-server';

const helloTypedefs = gql`
  type Hello {
    name: String
  }

  extend type Query {
    getHello: [Hello]
  }
`;

export = helloTypedefs;

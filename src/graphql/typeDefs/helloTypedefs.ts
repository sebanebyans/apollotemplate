import { gql } from 'apollo-server';

const helloTypedefs = gql`
"Entidad que representa un saludo"
  type Hello {
    name: String
  }

  extend type Query {
    "Te saluda"
    getHello: [Hello]
  }
`;

export = helloTypedefs;

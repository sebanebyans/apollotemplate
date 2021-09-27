import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from './typeDefs/typeDefs';
import resolvers from './resolvers/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export = schema;

import { makeExecutableSchema } from "@graphql-tools/schema";
import  typeDefs  from './typeDefs/typeDefs';
import  resolvers  from './resolvers/resolvers';


export const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
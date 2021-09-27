import { ApolloError } from 'apollo-server';

export default {
  Query: {
    getHello: async () => {
      try {
        const mockHello = [{ name: 'xyz' }, { name: 'abc' }];
        return mockHello;
      } catch (error: any) {
        throw new ApolloError(error);
      }
    },
  },
};

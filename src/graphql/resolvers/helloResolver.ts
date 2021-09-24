import { ApolloError} from 'apollo-server';

export const helloResolver = {
    Query: {
      getHello: async (_: any, args: any) => {
        try {
          const mockHello = [{ name: "xyz" }, { name: "abc" }];
          return mockHello;
        } catch (error:any) {
          throw new ApolloError(error);
        }
      },
    },
  };
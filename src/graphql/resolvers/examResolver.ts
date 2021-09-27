import { ApolloError } from 'apollo-server';
import { create, list, update, remove, findById, listHighlight, search } from '../../service/exam';

export default {
  Query: {
    getAllExam: async (_: any, { cursor, limit = 10 }: any) => {
      try {
        const pagination = cursor ? { _id: { $lt: cursor } } : {};
        const r = await list(pagination, parseInt(limit, 10));
        return r;
      } catch (error: any) {
        throw new ApolloError(error);
      }
    },

    searchExam: async (_: any, { searchText = '' }: any) => {
      try {
        return await search(searchText);
      } catch (error: any) {
        throw new ApolloError(error);
      }
    },
    getExamById: async (_: any, { id }: any) => {
      try {
        const r = await findById(id);
        return r;
      } catch (error: any) {
        throw new ApolloError(error);
      }
    },
    getAllHighlight: async () => {
      try {
        const r = await listHighlight();
        return r;
      } catch (error: any) {
        throw new ApolloError(error);
      }
    },
  },

  Mutation: {
    createExam: async (_: any, { input }: any) => {
      // eslint-disable-next-line no-useless-catch
      try {
        await create(input);
        return input;
      } catch (error) {
        throw error;
      }
    },

    updateExam: async (_: any, { id, input }: any) => {
      // eslint-disable-next-line no-useless-catch
      try {
        const r = await update(id, input);
        return r;
      } catch (error) {
        throw error;
      }
    },

    removeExam: async (_: any, { id }: any) => {
      // eslint-disable-next-line no-useless-catch
      try {
        const r = await remove(id);
        return r;
      } catch (error) {
        throw error;
      }
    },
  },
};

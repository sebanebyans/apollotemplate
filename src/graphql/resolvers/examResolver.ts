import { ApolloError } from "apollo-server";
import {
  create,
  list,
  update,
  remove,
  findById,
  listHighlight,
} from "../../service/exam";

export const examResolver = {
  Query: {
    getAllExam: async (_: any, { cursor, limit = 10 }: any) => {
      try {
      
        const pagination=  cursor ? {_id: {'$lt': cursor} } : {};     
        const r = await list(pagination,parseInt(limit));
        return r;
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
    getAllHighlight: async (_: any) => {
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
      try {
        const r = await create(input);
        return input;
      } catch (error) {
        throw error;
      }
    },

    updateExam: async (_: any, { id, input }: any) => {
      try {
        const r = await update(id, input);
        return r;
      } catch (error) {
        throw error;
      }
    },

    removeExam: async (_: any, { id }: any) => {
      try {
        const r = await remove(id);
        return r;
      } catch (error) {
        throw error;
      }
    },
  },
};

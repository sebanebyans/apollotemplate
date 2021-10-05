import { ApolloError } from 'apollo-server';
import { create, list, update, remove, findById, listHighlight, search, listPaged } from '../../repositories/exam';
import encode from '../../database/helpers/encode'; 

export default {
  Query: {
    getAllExam: async () => {
      try {      
        const r = await list();
        return r;
      } catch (error: any) {
        throw new ApolloError(error);
      }
    },

    getAllExamPaged: async (_: any, { cursor, limit = 10 }: any) => {
      try {
        const pagination = cursor ? { _id: { $lt: encode.base64ToSring(cursor) } } : {};
        const r = await listPaged(pagination, parseInt(limit, 10));
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
       const exam = await create(input);
        return exam;     
    },

    updateExam: async (_: any, { id, input }: any) => {
    const exam = await update(id, input)
    return exam;
    },

    removeExam: async (_: any, { id }: any) => {    
        const exam = await remove(id);
        return exam;
    
    },
  },
};

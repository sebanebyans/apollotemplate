import { gql } from 'apollo-server';

const examTypedefs = gql`

  type Exam  {  
    id: ID!
    title: String
    price: String
    description: String
    resultTime: String
    code: String
    searchTags: [String]
    tags: [String]
    reason: String
    category: String
    enabled:Boolean
    highlight: Boolean
  }

  input InputExam  {
    title: String
    price: String
    description: String
    resultTime: String
    code: String
    searchTags: [String]
    tags: [String]
    reason: String
    category: String
    enabled:Boolean
  }

  type ExamFeed {
    examFeed: [Exam!]
    pageInfo: PageInfo!
    totalCount: Int!

  }

 
  extend type Query {
    getAllExam(cursor:ID,limit:String): ExamFeed
    searchExam(searchText:String): [Exam]
    getExamById(id:ID!): Exam
    getAllHighlight: [Exam]

  }

  extend type Mutation {
    createExam(input:InputExam):Exam
    updateExam(id:ID!,input:InputExam):Exam
    removeExam(id:ID!):Exam
  }
`;

export = examTypedefs;

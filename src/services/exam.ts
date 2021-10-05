import {
  createExam,
  findExamById,
  listExam,
  listExamHighlight,
  listExamPaged,
  removeExam,
  searchExam,
  updateExam,
} from '../repositories/exam';


export const create = async (exam: any) => { 
    // some validations
    const newExam = createExam(exam);
    return newExam;  
};

export const list = async () => {   
    const exams = await listExam();
    return exams; 
};

export const listPaged = async (pagination: any, limit: number) => {
    const examsPaged = await listExamPaged(pagination,limit);
    return examsPaged;   
};

export const search = async (text: string) => {
    const exams = await searchExam(text);
    return exams; 
};

export const listHighlight = async () => {  
    const highlight = await listExamHighlight();
    return highlight;  
};

export const update = async (id: any, input: any) => {   
    const examUpdated =  updateExam(id,input);
    return examUpdated;  
};

export const remove = async (id: any) => {  
    const examDeleted = await removeExam(id);
    return examDeleted;
};

export const findById = async (id: any) => {   
    const exam = await findExamById(id);
    return exam; 
};

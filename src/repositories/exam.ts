import ExamModel from '../database/models/exam';
import encode from '../database/helpers/encode';

export const createExam = async (exam: any) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const newExam = new ExamModel(exam);
    const result = await newExam.save();
    return result;
  } catch (error) {
    throw error;
  }
};

export const listExam = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const query = { enabled: true };
    const exams = await ExamModel.find(query).sort({ _id: -1 });

    return exams;
  } catch (error) {
    throw error;
  }
};

export const listExamPaged = async (pagination: any, limit: number) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const query = { ...{ enabled: true }, ...pagination };
    let exams = await ExamModel.find(query)
      .sort({ _id: -1 })
      .limit(limit + 1);
    const totalCount = await ExamModel.find(query).count();
    const hasNextPage = exams.length > limit;
    exams = hasNextPage ? exams.slice(0, -1) : exams;
    const examPage = {
      examFeed: exams,
      totalCount,
      pageInfo: {
        nextPageCursor: hasNextPage ? encode.stringToBase64(exams[exams.length - 1].id) : null,
        hasNextPage,
      },
    };

    return examPage;
  } catch (error) {
    throw error;
  }
};

export const searchExam = async (text: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const textWords = text.split(' ').filter((x) => x);

    let orQuery: any[] = [];
    textWords.forEach((x) => {
      orQuery = orQuery.concat([
        { title: { $regex: x, $options: 'i' } },
        { searchTags: { $regex: x, $options: 'i' } },
        { category: { $regex: x, $options: 'i' } },
        { code: { $regex: x, $options: 'i' } },
      ]);
    });

    const query = {
      ...{ enabled: true },
      $or: orQuery,
    };

    const exams = await ExamModel.find(query).sort({ _id: -1 });
    return exams;
  } catch (error) {
    throw error;
  }
};

export const listExamHighlight = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    return await ExamModel.find({ enabled: true, highlight: true });
  } catch (error) {
    throw error;
  }
};

export const updateExam = async (id: any, input: any) => {
  // eslint-disable-next-line no-useless-catch
  try {
    return await ExamModel.findByIdAndUpdate(id, { ...input }, { new: true });
  } catch (error) {
    throw error;
  }
};

export const removeExam = async (id: any) => {
  // eslint-disable-next-line no-useless-catch
  try {
    return await ExamModel.findByIdAndUpdate(id, { enabled: false }, { new: true });
  } catch (error) {
    throw error;
  }
};

export const findExamById = async (id: any) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const exam = await ExamModel.findOne({ enabled: true, _id: id });
    return exam;
  } catch (error) {
    throw error;
  }
};

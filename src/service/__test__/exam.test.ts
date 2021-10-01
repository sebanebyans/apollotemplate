import { ExamModel } from '../../database/models/exam';
import examMock from '../../utils/test-utils/examMock.json';
import { dbConnect, dbDisconnect } from '../../utils/test-utils/dbhandler';
import {search} from '../exam';

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('exam Model Test Suite', () => {

  
  test('should validate exam Schema', async () => {
    let exam = new ExamModel({
      ...examMock.invalid,
    });
    expect(async () => await exam.save()).rejects.toThrow(
      'Exam validation failed: title: Path `title` is required.'
    );
  });

  test('should validate saving a new exam ', async () => {
    let exam = new ExamModel({
      ...examMock.valid2,
    });
    const newExam = await exam.save();
    expect(newExam._id).toBeDefined();
  });

  test('should validate not saving exams with same code ', async () => {
    let exam = new ExamModel({
      ...examMock.valid,
    });

    await expect(async () => {
      const newExam = await exam.save();
    }).rejects.toThrowError(/duplicate/);
  });

  test('should validate update exams', async () => {
    examMock.valid.code = "999";
    let exam = new ExamModel({
      ...examMock.valid,
    });
    const newExam = await exam.save();
    newExam.price = 999;    
    const updatedExam = await ExamModel.findByIdAndUpdate(newExam._id, exam,{ new: true });
    expect(updatedExam.price).toEqual(999);
  });

  test('should validate get highlights exams', async () => {
  
    const highlight = await ExamModel.find({'highlight':true});     
    expect(highlight.length).toEqual(2);
  });

  test('should validate search by pne patters', async () => {

    const examResults = await search("sangre")
    expect(examResults.length).toEqual(1);
  });

  test('should validate search by multiples patters', async () => {

    const examResults = await search("pcr")
    expect(examResults.length).toEqual(2);
  });

 
});

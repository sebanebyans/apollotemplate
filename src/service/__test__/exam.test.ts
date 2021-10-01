import {ExamModel} from '../../database/models/exam';
import  {
  dbConnect,
  dbDisconnect,
}  from '../../utils/test-utils/dbhandler';

beforeAll(async () => dbConnect());
afterAll(async () => dbDisconnect());

describe('exam Model Test Suite', () => {
  test('should validate saving a new student user successfully', async () => {

  
     const exam = new ExamModel({     
      //   local: fakeUserData,
    //   role: fakeUserData.role,
    });
    const exam2 = new ExamModel({ 
      
     //   local: fakeUserData,
   //   role: fakeUserData.role,
   });
    const newExam = await exam.save();
    const newExam2 = await exam2.save();

     expect(newExam._id).toBeDefined();
     expect(newExam2._id).toBeDefined();
        // validateNotEmpty(savedStudentUser);

    // validateStringEquality(savedStudentUser.role, fakeUserData.role);
    // validateStringEquality(savedStudentUser.local.email, fakeUserData.email);
    // validateStringEquality(
    //   savedStudentUser.local.username,
    //   fakeUserData.username
    // );
    // validateStringEquality(
    //   savedStudentUser.local.password,
    //   fakeUserData.password
    // );
    // validateStringEquality(
    //   savedStudentUser.local.firstName,
    //   fakeUserData.firstName
    // );
    // validateStringEquality(
    //   savedStudentUser.local.lastName,
    //   fakeUserData.lastName
    // );
  });

  // test('should validate MongoError duplicate error with code 11000', async () => {
  //   expect.assertions(4);
  //   const validStudentUser = new User({
  //     local: fakeUserData,
  //     role: fakeUserData.role,
  //   });

  //   try {
  //     await validStudentUser.save();
  //   } catch (error) {
  //     const { name, code } = error;
  //     validateMongoDuplicationError(name, code);
  //   }
  // });
});
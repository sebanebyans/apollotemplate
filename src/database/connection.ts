import moongose from 'mongoose';

export default async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    await moongose.connect(process.env.MONGO_DB! || 'mongodb+srv://admin:FqKLbBXJJ83Ltmvt@cluster0.lumsm.mongodb.net/exam');
  } catch (error) {
    throw error;
  }
};

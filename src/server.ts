import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import schema from './graphql/schema';
import connection from './database/connection';
// import ExamModel from './database/models/exam';

dotenv.config();

const PORT = process.env.PORT || 8080;

async function startServer() {
  const app = express();
  await connection();
  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
  });

  await apolloServer.start();
  try {
    apolloServer.applyMiddleware({ app });
    app.use(express.json());

    app.get('/', ({ res }: any) => {
      res.status(200).send({ msg: 'Hello World!' });
    });

    app.listen(PORT, () => console.log(`running on ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}

// const test = async () => {
//   // eslint-disable-next-line no-useless-catch
//   await ExamModel.deleteMany();
//    // eslint-disable-next-line no-useless-catch
//   try {
//     const b = ;
//     await ExamModel.insertMany(b);
//   } catch (error) {
//     throw error;
//   }

//   // await examModel.remove();
// };
startServer();
// test();

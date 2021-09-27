import   express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from 'dotenv';
import schema from './graphql/schema';
import connection from './database/connection';

dotenv.config();

const PORT = process.env.PORT || 8080;

async function startServer() {
  const app = express();
  await connection();
  const apolloServer = new ApolloServer({
   schema
  });

  await apolloServer.start();
  try{
    
    apolloServer.applyMiddleware({app});
    app.use(express.json());
  
    app.get('/',({res}:any)=> {
      console.log('get');
      res.status(200).send({msg: 'Hello World!'});
    });
  
    app.listen(PORT, () => console.log(`running on ${PORT}`));
  }
  catch (err){
    console.log(err);
  }
}

startServer();

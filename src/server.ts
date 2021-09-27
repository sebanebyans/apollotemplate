import path from 'path';
import { ApolloServer } from "apollo-server";
import { schema } from "./graphql/schema";
import dotenv from "dotenv";
import { connection } from './database/connection';
import examModel from './database/models/exam';
dotenv.config();

const PORT = process.env.PORT || 8080;

const startServer = async () => { 
  await connection();
  const server = new ApolloServer({
    schema,
  
  });

  server.listen(PORT, (): void =>
    console.log(
      `🚀GraphQL-Server is running on http://localhost:${PORT}/graphql`
    )
  );
};




const test = async() => {
 
   try {
    const b =   {
  title:"jona",
      price:3,
      description:"a",
      resultTime:"a",
      code:"a",
      searchTags: ["a"],
      tags:["a"],
      reason:"a",
      category:"a"
  }
  const e = new examModel(b);
  await e.save();
   } catch (error) {
     throw error
   }
}

startServer();
test();





import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import schema from './graphql/schema';
import connection from './database/connection';

dotenv.config();

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  await connection();
  const server = new ApolloServer({
    schema,
  });
  server.listen(PORT, (): void =>
    console.log(`🚀GraphQL-Server is running on http://localhost:${PORT}/graphql`)
  );
};

startServer();

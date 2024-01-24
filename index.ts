import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './config/database';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectToDatabase(process.env.DB_URI!).then(() => {
  console.log('Database connected');
  
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('Error connecting to database:', error);
  process.exit(1);
});
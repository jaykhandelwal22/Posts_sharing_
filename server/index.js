import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {databaseConfiguration} from './configurations/database.js';
import postRoutes from './routes/posts.js';

const app=express();

app.use(bodyParser.urlencoded({ limit:"30mb",extended: true }));
app.use(bodyParser.json({ limit:"30mb",extended: true }));
app.use(cors());
databaseConfiguration();
const PORT=process.env.PORT||4000;
//a
app.use('/posts',postRoutes);
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
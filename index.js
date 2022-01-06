import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { signUpRoute } from './screens/signUp/route.js';
import { signInRoute } from './screens/signIn/route.js';
import { creatGroupRoute } from './screens/CreateNewGroup/route.js';

const app = express();

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log('Database connected')
);

app.use(express.json());
app.use(cors());
app.listen(4000, () => console.log('server is up and runing'));
app.post('/api/signUp', signUpRoute);
app.post('/api/signIn', signInRoute);
app.post('/api/CreateNewGroup', creatGroupRoute);

import express, { Router, json } from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";

import cors from 'cors';

import { EventRouter } from './routes/eventRouter';
// import GuestRoutes from './routes/guestRouter';
// import UserRoutes from './routes/userRouter';

dotenv.config();

const MONGO_URL: string = (!process.env.DATABASE_URL) ? "" : process.env.DATABASE_URL; // TODO: find more elegant solution to this line.


mongoose.connect(MONGO_URL);
const database = mongoose.connection;

const masterRouter = Router();
const app = express();

database.on('error', (error) => {
    console.log(error);
})

database.on('connection', (stream) => {
  console.log('Database connected!');
});

app.use(json());
app.use(cors());

masterRouter.get('/ping', (req, res) => res.status(200).send("pong"));
masterRouter.use('/eventos', EventRouter);
// masterRouter.use('/guests', GuestRoutes);
// masterRouter.use('/users', UserRoutes);

app.use('/api', masterRouter);

export default app;

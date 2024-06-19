import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import { conf } from "./constants.js";

const app = express();

app.use(cors({
    origin: conf.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({
    limit: "64kb"
}));

app.use(express.urlencoded({
    extended: true,
    limit: "64kb"
}));
app.use(express.static("public"));
app.use(cookieParser());

// Routes import
import userRouter from './routes/user.routes.js';

// Routes declaration
app.use('/api/v1/users', userRouter);

export { app };

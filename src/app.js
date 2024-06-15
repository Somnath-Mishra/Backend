import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import { conf } from "./constants";

const app = express();

app.use(cors({
    origin: conf.CORS_ORIGIN,
    Credential: true,
}));

app.use(express.json({
    limit: "64kb"
}));

app.use(express.urlencoded({
    extended:true,
    limit:"64kb"
}));
app.use(express.static("public"));
app.use(cookieParser());




export { app }
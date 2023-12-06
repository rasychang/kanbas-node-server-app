// Entry point for the applicaiton
// const express = require("express")  old way load libraries
import session from "express-session";

import express from "express";
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
    cors({
        credentials: true,
        origin: 'https://a6--stirring-sable-a82b67.netlify.app/'
    })
);
const sessionOptions = {
    secret: "anystring",
    resave: false,
    saveUninitialized: false,
  };
app.use(session(sessionOptions));
app.use(express.json());

Lab5(app);
Hello(app);

UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);

app.listen(process.env.PORT || 4000);
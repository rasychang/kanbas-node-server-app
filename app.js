// Entry point for the applicaiton
// const express = require("express")  old way load libraries
import express from "express";
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";
import "dotenv/config";

const app = express();
app.use(express.json());
// app.get('/hello', (req, res) => {res.send('Life is good')})  // move to hello.js file
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})

app.use(
    cors({
        credentials: true,
        origin: '*'
    })
);
Lab5(app);
Hello(app);

ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);

app.listen(process.env.PORT || 4000);
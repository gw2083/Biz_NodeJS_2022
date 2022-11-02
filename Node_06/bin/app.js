import express from "express";
import path from "path";
import logger from "morgan";

import schoolRouter from "../routes/school.js";

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));

app.set("views", path.join("./views"));
app.set("view engine", "ejs");

app.use("/school", schoolRouter);

export default app;

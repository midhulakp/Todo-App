import express from "express";
import db from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import todoRouter from "./routes/todoRoutes.js";
import methodOverride from "method-override";
let app = express();
//db connection
db();
//Registering template engine
app.set("view engine", "ejs");

// process incoming form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

//router instance
app.use("/api/v1/todo", todoRouter);
app.use("/api/v1/user", userRouter);

export default app;

const express = require("express");
const app = express();


const htmlRouter = require("./htmlRoutes")
const notesRouter = require("./notesRoutes")

app.use("/htmlRouter", htmlRouter);
app.use("notesRoutes", notesRouter)


module.exports = app
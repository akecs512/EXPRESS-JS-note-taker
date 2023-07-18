const notesRouter = require('express').Router();
const path = require("path");
const router = require("express").Router();

router.get("/notesRouter", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html")); });

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html")); });

module.exports = router;
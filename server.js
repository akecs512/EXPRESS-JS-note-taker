const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});
app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "db/db.json"));
});
app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  console.log(newNote);
  const data = fs.readFileSync("db/db.json");
  const notesList = JSON.parse(data);
  notesList.push(newNote);
  fs.writeFileSync("db/db.json", JSON.stringify(notesList));

  res.sendStatus(200);
});
app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    const data = fs.readFileSync("db/db.json");
    const notesList = JSON.parse(data);
    const newNotesList = notesList.filter((note) => note.id != id);
    fs.writeFileSync("db/db.json", JSON.stringify(newNotesList));
    res.sendStatus(200);

});

app.listen(PORT, () => {
  console.log(`Server listening to http://localhost:${PORT}`);
});

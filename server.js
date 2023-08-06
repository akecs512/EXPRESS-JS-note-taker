const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
// app.use('/api/notes', (req, res, next) => {
//     console.log(req.body); 
//     next(); 
// });

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'db/db.json'));
});
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    console.log(newNote);
    res.json(newNote);
});

app
.listen(PORT, () => {
    console.log(
        `Server listening to http://localhost:${PORT}`
);
})


 



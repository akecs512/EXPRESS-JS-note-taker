const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

app.use(exress.json());
app.use(express.urlencoded ());
app.use(express.static("public"));




app.listen(port, () => console.log(`Server listening on port ${port}!`))
  .catch((err) => console.log(err));


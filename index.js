"use strict";

//declarar as dependencias do arquivo
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>first server response <h1/>");
});
// definir a porta que o servidor escutará
const PORT = 1234;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

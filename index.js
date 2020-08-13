"use strict";

//declarar as dependencias do arquivo
const express = require("express");
const app = express();

// definir a porta que o servidor escutará
const PORT = 1234;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

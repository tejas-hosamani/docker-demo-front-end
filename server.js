const express = require("express");

const app = express();

app.use(express.static("."));

app.listen(3030, () => console.log("Slides running at 3030"));

const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  // Fixed parameter order
  res.send("Server is ready to Go..");
});

app.listen(PORT, () => {
  console.log(`Server at ${PORT}`);
});

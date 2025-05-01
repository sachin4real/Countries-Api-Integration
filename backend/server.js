const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});

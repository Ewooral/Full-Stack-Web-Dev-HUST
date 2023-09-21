import express from "express";
import data from "./data/mock.json";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("This is a get request at /");
});

app.post("/create", (req, res) => {
  res.send("This is a post request at /create");
});
app.put("/edit", (req, res) => {
  res.send("This is a put or update request at /edit");
});
app.delete("/delete", (req, res) => {
  res.send("This is a delete request at /delete");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(data);
});

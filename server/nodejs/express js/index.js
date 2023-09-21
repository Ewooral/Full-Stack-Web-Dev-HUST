import express from "express";
import data from "./data/mock.json";

const app = express();

const PORT = 3000;


// USING THE PUBLIC FOLDER AT THE ROOT OF THE PROJECT
// which means we will not add a route at the beginning
app.use(express.static("public"))


// Using the images folder at the route /images
app.use("/images", express.static("images"))






// GET
app.get("/", (req, res) => {
    res.json(data)

});

// POST
app.post("/create", (req, res) => {
  res.send("This is a post request at /create");
});

// UPDATE OR PUT
app.put("/update", (req, res) => {
  res.send("This is a put or update request at /edit");
});

// DELETE
app.delete("/delete", (req, res) => {
  res.send("This is a delete request at /delete");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
//   console.log(data);
});


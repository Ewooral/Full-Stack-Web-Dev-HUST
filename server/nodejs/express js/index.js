import express from "express";
import data from "./data/mock.json" assert { type: 'json' };
import mongoose from "mongoose"

const app = express();

const PORT = 3000;


// USING THE PUBLIC FOLDER AT THE ROOT OF THE PROJECT
// which means we will not add a route at the beginning
app.use(express.static("public"))


// Using the images folder at the route /images
app.use("/images", express.static("images"))

// Using express.json and express.urlencoded
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

var dbUrl = 'mongodb+srv://ewooral:OWusu123@cluster0.tua5o.mongodb.net/'


// ROUTE CHAINING
app.route("/class")
    .get((req, res) => {
        // res.send("Retrieve class info")
        throw new Error();
    })
    .post((req, res) => {
    res.send("Create class info")
    })
    .put((req, res) => {
    res.send("Update class info")
    })
    .delete((req, res) => {

    res.send("delete class info")
})




// GET
app.get("/", (req, res) => {
    res.json(data)

});

// GET with next()
app.get("/next", (req, res, next) => {
    console.log("The response will be sent by the next function")
    next();
}, (req, res, next) => {
    res.send("I just set up a route with a second call back");
}
)

// GET - redirect method
app.get("/redirect", (req, res) => {
    res.redirect("https://www.codersabode.tech")
})

// GET with Route parameters
app.get("/class/:id", (req, res) => {
    // console.log(req.params)
    const studentId = Number(req.params.id) // converts the string id to a number
    const student = data.filter((student) => student.id == studentId)
    // const student = data.map((student) => student.id == studentId)
    // const student = data.reduce((student) => student.id == studentId)
    res.send(student);

})
// POST
app.post("/create", (req, res) => {
  res.send("This is a post request at /create");
});

//  POST - express.json and express.urlencoded
app.post("/item", (req, res) => {
    console.log(req.body)
    res.send(req.body)
})
// UPDATE OR PUT
app.put("/update", (req, res) => {
  res.send("This is a put or update request at /edit");
});

// DELETE
app.delete("/delete", (req, res) => {
  res.send("This is a delete request at /delete");
});


// Custom Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(
        "<div style='display: flex; justify-content: center; align-items: center;" +
        "flex-direction: column; color: #000'>" +
        "<h1 style='color: red'>Something is broken!</h1>" +    
        "<h2>Try again later</h2>" +
        "</div> " 
        
    )
})

let promise = new Promise((resolve, reject) => {
    let connected = mongoose.connect(dbUrl);
    if (connected) {
        resolve(connected)
    } else {
        reject()
    }

})
promise.then(() => { console.log("MongoDB connected successfully")})
    .catch((error) => {
        if (error) {
        console.log("Something went wrong \n", error)
    }
})


// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise
// .then( response => {
// return response.json();
// })
// .then( json => {
// console.log(json[0].name);
// });



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
//   console.log(data);
});


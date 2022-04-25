// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
let express = require("express");
let bodyParser = require("body-parser");
let cors = require('cors');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

app.get("/api", function(req,res) {
    res.send(projectData);
});
app.post("/api", function(req,res) {
    projectData = req.body;
    res.send(projectData); 
});

// Setup Server
app.listen(8000,listening);
function listening(){
    console.log("server running");
}
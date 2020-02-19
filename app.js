var PORT = process.env.PORT || 5000;
var express = require("express");
var todoController = require("./controllers/todoController");

// var itemOne = ToDo({item : "buy flowers"}).save(function(err){
//     if(err){
//         throw err;
//     }
//     console.log("Item saved.")
// })

var app = express();

//set up template engines
app.set("view engine", "ejs");


//serving static files
app.use(express.static("./public"));

// app.get("/todo",function(req,res){
//     res.render("todo",{todos:data})

// });

//fire controller
todoController(app);

app.listen(PORT, function() {
  });

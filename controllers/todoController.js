var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })


// var data = [{item:"get milk"},{item:"walk dog"},{item :"kick some coding ass"}];
var mongoose = require("mongoose");

//connect to the database
mongoose.connect("mongodb+srv://fasikaw123:fasikaw123@mycluster-nxkzr.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true  });
// mongoose.set('useUnifiedTopology', true);

// create a schema - this is like a blue  print
var todoSchema = new mongoose.Schema({
    item:String
});

var ToDo = mongoose.model("Todo",todoSchema);

module.exports = function(app){
    app.get("/todo",function(req,res){
        ToDo.find({},function(err,data){
            if (err) throw err;
            res.render("todo",{todos:data})

        });


    });

    app.post("/todo",urlencodedParser, function(req,res){
        var newTodo = ToDo(req.body).save(function(err,data){
            if(err) throw err;
            res.json(req.body)

        })
        // data.push(req.body);

        // res.redirect("/todo")

        
    });

    app.delete("/todo/:item",function(req,res){

        ToDo.find({item :req.params.item.replace(/\-/g," ")}).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        })
        // data = data.filter(function(todo){
        //     return todo.item.replace(/ /g,"-") !== req.params.item
        // });
        // res.json(data);
        // // res.redirect("/todo");

        
    });
}
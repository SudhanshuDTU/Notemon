//import from packages
const express = require('express');
const mongoose = require('mongoose');
const Note = require("./model/note");
const bodyParser = require('body-parser');
const router = require('./routes/Note');

const app = express();
app.use(bodyParser.urlencoded({extended: false})); // nested data nhi daal skte
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://sudhanshujha2717:Dtu%402021@cluster0.fk8zcoy.mongodb.net/notesdb").then(()=>{
    app.get('/home',(req,res)=>{
        res.send("Api Works!");
    });

    const noteRouter = require('./routes/Note');
    app.use("/notes",noteRouter);
    
});



//Starting server on port
app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`);
});
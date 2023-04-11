const express = require('express');
const router = express.Router();
const Note = require('../model/note');

//read
router.post('/list',async (req,res)=> {
    var notes = await Note.find({userid: req.body.userid});
    res.json(notes);
});

//create
router.post('/add',async (req,res)=> {
    await Note.deleteOne({id: req.body.id});

   const newNote = new Note({id: req.body.id,userid:req.body.userid,title: req.body.title,content:req.body.content});
    await newNote.save();
    res.json({message: " New note Created" + `id: ${req.body.id}`});

});

router.post("/delete",async(req,res)=>{
    await Note.deleteOne({id: req.body.id});
    res.json({message: " Note Deleted" + `id: ${req.body.id}`});

});
module.exports = router;
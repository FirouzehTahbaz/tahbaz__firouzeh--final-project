const express = require("express");
const uuid = require("uuid");
const app = express();
const verifyToken = require("./middleware/jwtVerify");
const { readEntries, writeEntries } = require('./util/jsonHandler');
const bodyParser = require('body-parser')
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get("/entries", async (req, res) => {
  await readEntries().then((entriesJson) => {
    console.log('entriesJson',entriesJson)
    return res.status(200).send(entriesJson);
  }).catch((err)=>{
    console.log('err',err)
  })
});


app.get("/entries/:id", async (req, res) => {
  await readEntries().then((entriesJson) => {
    const id = req.params.id;
    var list = entriesJson.filter((items)=> items.id == id)
    return res.status(200).send(list);
  }).catch((err)=>{
    console.log('err',err)
  })
});

app.post("/entries-add",async (req,res)=>{
  let newEntry = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    content: req.body.content,
  };
  console.log('req.body',newEntry)
  if(!newEntry.name){
    return res.json({message:'name can not be blank'})
  }
  if(!newEntry.email){
    return res.json({message:'email can not be blank'})
  }
  if(!newEntry.phoneNumber){
    return res.json({message:'phone Number can not be blank'})
  }
  if(!newEntry.content){
    return res.json({message:'content can not be blank'})
  }
  await readEntries().then((entriesJson) => {
    entriesJson.push(newEntry);
    writeEntries(entriesJson)
    return res.status(201).send(entriesJson);
  });
  
});
// app.post("/entries-add", async (req, res) => {

//   let newEntry = {
//     id: uuid.v4(),
//     name: req.body.name,
//     email: req.body.email,
//     phoneNumber: req.body.phoneNumber,
//     content: req.body.content,
//   };
//   console.log('req.body',newEntry)

//   await readEntries().then((entriesJson) => {
//       entriesJson.push(newEntry);
//       writeEntries(entriesJson).then((data)=>{
//         console.log(data)
//       })
//       return res.status(201).send(entriesJson);
//   });

// });



module.exports = app;

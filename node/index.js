const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./src/router");
const bodyParser = require('body-parser')
app.use('/api',router)
// // allows us to parse json
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// routers


// ERROR Hendler 
app.use((req, res, next) => {
  res.status(404).json({
      error: 'Not Found !!!',
  })
})

app.listen(`${process.env.PORT}`, () =>
  console.log(`API server ready on http://localhost:${process.env.PORT}`)
);

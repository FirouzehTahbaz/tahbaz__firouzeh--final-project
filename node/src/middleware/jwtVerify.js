const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

function verifyToken (req, res, next) {
  console.log(req)
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];
  console.log('token',token)
  
  if (token == null) {
    return res.status(400).send({ message: "token not found" });
  }

  try {
    const data = jwt.verify(token, process.env.privateKey);
    req.user = data;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).send({ message: err.message });
  }
};

module.exports = verifyToken;

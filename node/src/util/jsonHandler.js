const util = require("util");
const fs = require("fs");
const path = require("path");
require("dotenv").config();


const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const entriesDB = path.resolve('./data/entries.json');
const usersDB = path.resolve('./data/users.json');

async function readEntries() {
  const json = await readFile(entriesDB);
  return JSON.parse(json);
}

async function writeEntries(items) {
  const json = JSON.stringify(items, null, 2);

  return writeFile(entriesDB, json);
}

 module.exports = {readEntries, writeEntries }

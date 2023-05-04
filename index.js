const { Person } = require("./person");
const dotenv = require("dotenv");
dotenv.config();

const connectToDatabase = require("./src/database/connect");

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
require("./modules/express");

const person = new Person("Felipe");

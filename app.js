const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const Contact = require("./model/contactModel");
const contactRoute = require("./routes/contact");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(`${process.env.VERSION}`, contactRoute);

mongoose.connect(process.env.DATABASE_URI).then(() => {
  app.listen(process.env.PORT, () =>{
    console.log("Server is running" + process.env.PORT);
  })
}).catch(err => console.log(err));

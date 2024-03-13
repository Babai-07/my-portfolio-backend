const mongoose = require("mongoose");
const contact = require("../model/contactModel");

exports.saveContactMongoDb = async (req, res) => {
  try {
    const { name, email, subject, msg } = req.body;
    if (!name || !email || !subject || !msg)
      return res
        .status(200)
        .json({
          status: 0,
          msg: "name,email,subject,msg fields are requiresd",
        });
    const saveData = await contact.create({
      name,
      email,
      subject,
      msg,
    });
    if (!saveData)
      return res.status(200).json({ status: 0, msg: "data not saved" });
    return res.status(201).json({ status: 1, data: saveData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ stetus: 0, msg: "Server Error" });
  }
};

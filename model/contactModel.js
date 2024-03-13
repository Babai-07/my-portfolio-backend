const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is require"],
    },
    email: {
      type: String,
      required: [true, "Email is require"],
    },
    subject: {
      type: String,
      required: [true, "Subject is require"],
    },
    msg: {
      type: String,
      required: [true, "msg is require"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const contact = mongoose.model("portfolios", contactSchema);

module.exports= contact;

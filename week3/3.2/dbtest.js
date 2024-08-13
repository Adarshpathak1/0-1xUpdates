require("dontenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Admin-Adarsh_db:rm9u1mh371u3EzZX@cluster0.eg48g.mongodb.net/userAppNew",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const User = mongoose.model("users", {
  name: String,
  email: String,
  password: String,
});
const user = new User({
  name: "Harkirat",
  email: "harkirat@email.com",
  password: "123",
});

user.save();

//Sabash! :)

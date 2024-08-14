require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
console.log(process.env.MONGODB_URI);

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

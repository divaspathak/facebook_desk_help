const http = require("http");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing

const mongoUrl =
  "mongodb+srv://divaspathak:Divas5563504@cluster0.2n3lmsk.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

const app = express();
const port = 4500;

app.use(cors());
app.use(express.json());

const User = require("./userdetails"); // Import the User model

app.get("/", (req, res) => {
  res.send("Hello, the app is running");
});

// User Registration Route
app.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send({ error: "User Already Exists" });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds

    await User.create({
      name,
      email,
      password: hashedPassword, // Store the hashed password
    });

    res.send({ status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

// User Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User Not Found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Invalid password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
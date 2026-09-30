import express from "express";
import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

// ======================
//      Connectivity
// ======================

(async () => {
  const connectionInstance = await mongoose.connect(
    "mongodb+srv://hussainbscs2024_db_user:fVaS62sjtawGIh7T@cluster0.i7g0l4r.mongodb.net/",
  );
})();

// ======================
//      Setup Schema
// ======================

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
});

// ==========================
//      Create Collection
// ==========================

const userCollection = mongoose.model("User", userSchema);

// =========================
//     Different Routes
// =========================

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

// ==============
//     Create
// ==============

app.post("/create-user", async (req, res) => {
  const userObj = req.body;
  const createdUser = await userCollection.create(userObj);
  res.send({ createdUser: createdUser });
});

// ============
//     Read
// ============

app.get("/get-users", async (req, res) => {
  const users = await userCollection.find();
  res.send(users);
});

// ========================
//     Read Single Item
// ========================

app.get("/get-single-user", async (req, res) => {
  const { name } = req.body;
  const user = await userCollection.findOne({ name: name });
  res.send(user);
});

// ==============
//     Update
// ==============

app.put("/update-user", async (req, res) => {
  const userId = req.query.id;
  const newUser = req.body;
  const updatedUser = await userCollection.findByIdAndUpdate(userId, newUser, {
    new: true,
  });
  res.send({ updatedUser: updatedUser });
});

// ==============
//     Delete
// ==============

app.delete("/delete-user", async (req, res) => {
  const userId = req.query.id;
  const deletedUser = await userCollection.findByIdAndDelete(userId);
  res.send({
    deletedUser: deletedUser,
  });
});

app.listen(1770, () => {
  console.log("server is running on http://localhost:1770");
});

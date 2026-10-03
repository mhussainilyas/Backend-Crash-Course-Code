import express from "express";

const app = express();

// Set middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("main route");
});

app.get("/about", (req, res) => {
  res.send("about route");
});

app.get("/login", (req, res) => {
  res.send("login signup page");
});

app.post("/create-user", (req, res) => {
  //   console.log(req.body);
  //   res.send({ message: `Welcome! ${req.body.name}` });

  // Receive data from request
  const { name, email } = req.body;
  console.log("Received:", req.body);

  // Send response back
  res.status(201).json({
    message: `Welcome ${name}!`,
    email: email,
  });
});

app.listen(7000, () => {
  console.log("Express server is running on http://localhost:7000");
});

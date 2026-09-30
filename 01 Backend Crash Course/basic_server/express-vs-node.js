// ============================
//     Server Using Node.js
// ============================

// import http from "http";

// const server = http.createServer((req, res) => {
//   if (req.url === "/" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello from Node.js server");
//   } else if (req.url === "/about" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("About page");
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page not found");
//   }
// });

// server.listen(7000, () => {
//   console.log("Node.js server running on http://localhost:7000");
// });

// ===============================
//     Server Using Express.js
// ===============================

// import express from "express";

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello from Express server 🚀");
// });

// app.get("/about", (req, res) => {
//   res.send("About page");
// });

// app.listen(7000, () => {
//   console.log("Express server running on http://localhost:7000");
// });

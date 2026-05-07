const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);
const app = express();
app.use(cors());

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Logiflow API");
});
app.use("/api", userRoutes);

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });
module.exports = app;

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log("Server is running at : " + PORT);
  });
}

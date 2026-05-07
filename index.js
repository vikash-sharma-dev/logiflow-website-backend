const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);
const app = express();
app.use(cors());

app.use(express.json());

// routes
app.use("/api", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
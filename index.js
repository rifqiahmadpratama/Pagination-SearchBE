const express = require("express");
const cors = require("cors");
const UserRoutes = require("./src/routes/UserRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoutes);
app.listen("5000", () => console.log("server up and running"));

import express from "express";
import cors from "cors";
import urlRoutes from "./routes/urlRoutes";

const app = express();

app.use(cors());
app.use(express.json());

console.log("Loading routes...");

// Route registration
app.use("/", urlRoutes);

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// routing import.....
import UserRouter from "./routes/User.routers.js";
dotenv.config({
  path: "./.env",
});
const app = express();

app.use(cors());
app.use(express.json({ limit: "20kb" }));
app.use(express.static("dist"));

// routing declearation....
app.use("/api/v2", UserRouter);

// listen point.....
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running port no at ${PORT}`);
});

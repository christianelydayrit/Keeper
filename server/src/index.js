import "dotenv/config";
import express from "express";
import noteRoutes  from "./routes/notes.routes.js"
import authRoutes from "./routes/auth.routes.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const port= 3000;
app.set("trust proxy", 1);
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  }));

app.get("/health", (_, res) => res.send("OK"));
app.use("/api", noteRoutes);
app.use("/api/auth", authRoutes);


app.listen(port, () => console.log("Server Started"))
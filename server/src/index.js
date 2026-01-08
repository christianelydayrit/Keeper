import express from "express";
import noteRoutes  from "./routes/notes.routes.js"

const app = express();
const port= 3000;
app.use(express.json());

app.use("/api", noteRoutes);


app.listen(port, () => console.log("Server Started"))
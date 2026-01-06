import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";

// import path, { dirname } from "path";
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url));
env.config();
const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
})
db.connect()
const app = express();
const port= 3000;

app.get("/api/todos", async (req, res) =>{
    try{
        const list = await db.query("SELECT * FROM todo")
        console.log(list.rows)
        res.status(200).json(list.rows);
    }catch(e){
        res.status(500).json({ error: "Failed to fetch todos" });
    }
})

app.listen(port, () => console.log("Server Started"))
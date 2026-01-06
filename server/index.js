import express from "express";
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
app.use(express.json());

app.get("/api/todos", async (req, res) =>{
    try{
        const list = await db.query("SELECT * FROM todo")
        console.log(list.rows)
        res.status(200).json(list.rows);
    }catch(e){
        console.log( "error from api todos : " +e)
        res.status(500).json({ error: "Failed to fetch todos" });
    }
})

app.post("/api/add", async (req, res,) =>{
    try{
        const content = req.body.content;
        const title = req.body.title;
        await db.query("INSERT INTO todo (title, content) VALUES ($1, $2)", [title, content])
        res.status(201).json({ message: "Todo added" });
    }catch(e){
        console.error("From api add: " + e);
        res.status(500).json({ error: "Failed to add todo" });
    }
})

app.delete("/api/delete/:id", async (req, res) =>{
    const id = req.params.id;
    try{
        await db.query("DELETE FROM todo WHERE id = $1", [id])
        res.status(200).json({ message: "Todo deleted" });
    }catch(e){
        res.status(500).json({ error: "Failed to delete todo" });
    }
})
app.listen(port, () => console.log("Server Started"))
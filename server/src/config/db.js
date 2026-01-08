import pg from "pg"
import env from "dotenv";
import path from "path";

env.config({ path: path.resolve(process.cwd(), ".env") });

const db = new pg.Client({
        user: process.env.PG_USER,
        host: process.env.PG_HOST,
        database: process.env.PG_DATABASE,
        password: process.env.PG_PASSWORD,
        port: process.env.PG_PORT
    })

    db.connect().then(() => console.log("Connected to DB"))

export default db;
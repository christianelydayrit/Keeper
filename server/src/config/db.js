import pg from "pg"


const db = new pg.Client({
        connectionString: process.env.DATABASE_URL
        ,
  ssl: { rejectUnauthorized: false }
    })

    db.connect().then(() => console.log("Connected to DB"))

export default db;
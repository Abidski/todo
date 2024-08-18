import pg from "pg";
import "dotenv/config";

const { Pool } = pg;
console.log(process.env.NAME);
const pool = new Pool({
  user: process.env.NAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 5432,
  database: process.env.DATABASE,
});

export default pool;

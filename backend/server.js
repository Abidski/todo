import express from "express";
import pool from "./db.js";
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//get all todo
app.get("/", async (req, res) => {
    try {
        const data = await pool.query("SELECT * FROM todo");
        res.json(data.rows);
    } catch (err) {
        console.error(err);
    }
});

//add a todo
app.post("/add", async (req, res) => {
    const result = req.body.description;
    console.log(result);
    try {
        await pool.query("INSERT INTO todo (description) VALUES ($1)", [result]);
        res.redirect("/");
    } catch (err) {
        console.error(err.message);
    }
});

//edit a todo
app.patch("/edit", async (req, res) => {
    const id = req.body.id;
    const newInfo = req.body.update;
    try {
        await pool.query("UPDATE todo SET description = $1  WHERE id = $2", [
            newInfo,
            id,
        ]);
        res.redirect("/");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a todo
app.delete("/delete", async (req, res) => {
    const id = req.body.id;
    try {
        await pool.query("DELETE FROM todo WHERE id = $1", [id]);
        res.redirect("/");
    } catch (err) {
        console.error(err.message);
    }
});

//run server
app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});

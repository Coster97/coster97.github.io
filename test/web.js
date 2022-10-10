import express from "express";
import path from "path"

const app = express();
const __dirname = path.resolve();


app.set("views", __dirname + "/views")
app.set("view engine", "pug")
app.get("/", (req, res) => {
    res.render("main")
})

app.listen(8001)
import express from "express";
import path from "path"

const __dirname = "/home/hosting_users/dmsrud1501222/apps/dmsrud1501222_devstudy2022";
const app = express();



app.set("views", __dirname + "/views")
//app.set("views", process.cwd() + "/views")
app.set("view engine", "pug")
app.get("/", (req, res) => {
    res.render("main")
})

app.listen(8001)
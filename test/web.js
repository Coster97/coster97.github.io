import express from "express";

const __dirname = "/home/hosting_users/dmsrud1501222/apps/dmsrud1501222_devstudy2022";
const app = express();

app.set("view engine", "pug")
app.set('views', __dirname + '/views')
//app.set("views", process.cwd() + "/views")

app.get("/", (req, res) => {
    res.render("main")
})

app.listen(8001)

export default app;
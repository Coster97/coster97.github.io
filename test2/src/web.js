import express from "express"
import morgan from "morgan";
import globalRouter from "./router/main.js";

const __dirname = "/home/hosting_users/dmsrud1501222/apps/dmsrud1501222_thisistest";

const app = express();
const logger = morgan("dev");


app.use(logger);
app.use("/", globalRouter)

app.set("view engine", "pug") 
//app.set("views", process.cwd() + "/src/views")
app.set('views', __dirname + '/src/views')
app.listen(8001);
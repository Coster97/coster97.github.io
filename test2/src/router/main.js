import express from "express"
import morgan from "morgan";
import { global } from "../controller/main.js";

const globalRouter = express.Router();


globalRouter.get("/", global);

export default globalRouter

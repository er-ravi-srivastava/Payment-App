import express, { Express } from "express";
import router from "./route";

const app: Express = express();

app.use("/payment/v1", router);

export default app;

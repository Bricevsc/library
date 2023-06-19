import dotenv from "dotenv";
import express from "express";
import router from "./routes/routes.js";
import route from "./routes/routes.js";
import("./config/db.js");

dotenv.config({ path: "config/.env" });

const { APP_HOSTNAME, APP_PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use("/", route);

app.listen(APP_PORT, () => {
  console.log(`App listening at http://${APP_HOSTNAME}:${APP_PORT}`);
});

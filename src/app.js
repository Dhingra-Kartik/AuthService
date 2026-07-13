import express from "express";
import cors from "cors";
import V1Router from "../src/routes/v1Routes.js";
import bodyParser from "body-parser";

const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());

app.use("/v1", V1Router);

app.get("/", (req, res) => {
  res.send("Auth Service Running...");
});

export default app;
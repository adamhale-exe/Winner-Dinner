import express from "express";
import logger from "morgan";
import cors from "cors";

import { proteinsRouter } from "./routes/proteins.router.mjs";
import { carbsRouter } from "./routes/carbs.router.mjs";
import { linksRouter } from "./routes/links.router.mjs";
import { recipesRouter } from "./routes/recipes.router.mjs";
import { tagsRouter } from "./routes/tags.router.mjs";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PATCH"],
  })
);

app.use("/carbs", carbsRouter);
app.use("/proteins", proteinsRouter);
app.use("/links", linksRouter);
app.use("/recipes", recipesRouter);
app.use("/tags", tagsRouter);

app.use(function (_req, res, _next) {
  res.status(404).json({
    success: false,
    error:
      "We couldn't find what you were looking for 😞. Did you send the request to the right path?",
  });
});

app.use(function (err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: "Something went wrong, please try again later",
  });
});

export default app;

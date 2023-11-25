import express from "express";

import * as proteinsController from "../controllers/proteins.controller.js";

export const proteinsRouter = express.Router();

proteinsRouter.get("/", proteinsController.getProteins);

proteinsRouter.get("/:id", proteinsController.getProteinById);

proteinsRouter.post("/", proteinsController.createProtein);

proteinsRouter.patch("/:id", proteinsController.updateProteinById);

proteinsRouter.delete("/:id", proteinsController.deleteProteinById);

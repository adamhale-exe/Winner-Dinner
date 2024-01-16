import express from "express";

import * as carbsController from "../controllers/carbs.controller.mjs";

export const carbsRouter = express.Router();

carbsRouter.get("/", carbsController.getCarbs);

carbsRouter.get("/:id", carbsController.getCarbById);

carbsRouter.post("/", carbsController.createCarb);

carbsRouter.patch("/:id", carbsController.updateCarbById);

carbsRouter.delete("/:id", carbsController.deleteCarbById);

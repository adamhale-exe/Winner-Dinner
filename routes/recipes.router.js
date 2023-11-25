import express from "express";

import * as recipesController from "../controllers/recipes.controller.js";

export const recipesRouter = express.Router();

recipesRouter.get("/", recipesController.getRecipes);

recipesRouter.get("/:id", recipesController.getRecipeById);

recipesRouter.post("/", recipesController.createRecipe);

recipesRouter.patch("/:id", recipesController.updateRecipeById);

recipesRouter.delete("/:id", recipesController.deleteRecipeById);

import express from "express";

import * as recipesTagsController from "../controllers/recipesTags.controller.mjs";

export const recipesTagsRouter = express.Router();

recipesTagsRouter.get("/", recipesTagsController.getRecipesTags);

recipesTagsRouter.get("/recipeid/:id", recipesTagsController.getRecipesByTagId);

recipesTagsRouter.get("/tagid/:id", recipesTagsController.getRecipeById);

recipesTagsRouter.post("/", recipesTagsController.createRecipe);

recipesTagsRouter.patch("/:id", recipesTagsController.updateRecipeById);

recipesTagsRouter.delete("/:id", recipesTagsController.deleteRecipeById);

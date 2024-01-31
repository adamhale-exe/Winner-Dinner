import express from "express";

import * as recipesTagsController from "../controllers/recipesTags.controller.mjs";

export const recipesTagsRouter = express.Router();

recipesTagsRouter.get("/", recipesTagsController.getRecipesTags);

recipesTagsRouter.get("/tagid/:id", recipesTagsController.getRecipesByTagId);

recipesTagsRouter.get("/recipeid/:id", recipesTagsController.getTagsByRecipeId);

recipesTagsRouter.post("/", recipesTagsController.createRecipesTag);

recipesTagsRouter.patch("/:id", recipesTagsController.updateRecipeById);

recipesTagsRouter.delete("/:id", recipesTagsController.deleteRecipeById);

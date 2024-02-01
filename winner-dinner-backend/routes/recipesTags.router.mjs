import express from "express";

import * as recipesTagsController from "../controllers/recipesTags.controller.mjs";

export const recipesTagsRouter = express.Router();

recipesTagsRouter.get("/", recipesTagsController.getRecipesTags);

recipesTagsRouter.get("/tagid", recipesTagsController.getRecipesByTagId);

recipesTagsRouter.get("/recipeid/:id", recipesTagsController.getTagsByRecipeId);

recipesTagsRouter.post("/", recipesTagsController.createRecipesTag);

recipesTagsRouter.delete("/", recipesTagsController.deleteRecipeTagByRecipeId);

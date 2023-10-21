import express from "express";
const router = express.Router();

import {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipeById,
  deleteRecipeById,
} from "../controllers/recipesController.js";

router.get("/recipes", async (req, res) => {
  const result = await getRecipes();
  res.status(200).json({ success: true, payload: result });
});

router.get("/recipes/:id", async (req, res) => {
  const id = Number(req.params.id);
  const result = await getRecipeById(id);
  res.status(200).json({ success: true, payload: result });
});

router.post("/recipes", async (req, res) => {
  const newRecipe = req.body;
  const result = await createRecipe(newRecipe);
  res.status(201).json({ success: true, payload: result });
});

router.patch("/recipes/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updateRecipe = req.body;
  const result = await updateRecipeById(id, updateRecipe);
  res.status(200).json({ success: true, payload: result });
});

router.delete("/recipes/:id", async (req, res) => {
  const id = Number(req.params.id);
  const result = await deleteRecipeById(id);
  res.status(200).json({ success: true, payload: result });
});

export default router;

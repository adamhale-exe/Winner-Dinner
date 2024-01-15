//will need to import recipes models from /models/recipes.js
import * as recipesModel from "../models/recipesModel.js";

//first request to return all recipes
export async function getRecipes(req, res) {
  const result = await recipesModel.getRecipes();
  res.status(200).json({ success: true, payload: result });
}

//return specific recipe by id
export async function getRecipeById(req, res) {
  const id = Number(req.params.id);
  const result = await recipesModel.getRecipeById(id);
  if (result != null) {
    res.status(200).json({ success: true, payload: result });
  } else {
    res.status(404).json({
      success: false,
      error:
        "We couldn't find what you were looking for 😞. Does that recipe exist?",
    });
  }
}

// create a new recipe in the list
export async function createRecipe(req, res) {
  if (Object.keys(req.body).length !== 2) {
    res.status(400).json({
      success: false,
      error: "Invalid request 😞. Please review and try again!",
    });
  } else {
    const newRecipe = req.body;
    const result = await recipesModel.createRecipe(newRecipe);
    if (result != null) {
      res.status(201).json({ success: true, payload: result });
    } else {
      res.status(500).json({
        success: false,
        error: "We couldn't add the recipe 😞. Try again later!",
      });
    }
  }
}

//update the details of an existing recipe
export async function updateRecipeById(req, res) {
  const id = Number(req.params.id);
  const updateRecipe = req.body;
  const result = await recipesModel.updateRecipeById(id, updateRecipe);
  if (result != null) {
    res.status(200).json({ success: true, payload: result });
  } else {
    res.status(404).json({
      success: false,
      error:
        "We couldn't find what you were looking for 😞. Does that recipe exist?",
    });
  }
}

// delete a recipe
export async function deleteRecipeById(req, res) {
  const id = Number(req.params.id);
  const result = await recipesModel.deleteRecipeById(id);
  if (result != null) {
    res.status(200).json({ success: true, payload: result });
  } else {
    res.status(404).json({
      success: false,
      error:
        "We couldn't find what you were looking for 😞. Does that recipe exist?",
    });
  }
}

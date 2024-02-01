//will need to import tags models from /models/tags.js
import * as recipeTagsModel from "../models/recipeTagsModel.mjs";

//first request to return all tags
export async function getRecipesTags(req, res) {
  const result = await recipeTagsModel.getRecipesTags();
  res.status(200).json({ success: true, payload: result });
}

//return all recipes by tagid
export async function getRecipesByTagId(req, res) {
  if (Object.keys(req.body).length > 1) {
    res.status(400).json({
      success: false,
      error: "Invalid request 😞. Please review and try again!",
    });
  }
  const id = req.body;
  const result = await recipeTagsModel.getRecipesByTagId(id);
  if (result != null) {
    res.status(200).json({ success: true, payload: result });
  } else {
    res.status(404).json({
      success: false,
      error:
        "We couldn't find what you were looking for 😞. Does that tag exist?",
    });
  }
}

//return all tags by recipeid
export async function getTagsByRecipeId(req, res) {
  if (Object.keys(req.body).length > 1) {
    res.status(400).json({
      success: false,
      error: "Invalid request 😞. Please review and try again!",
    });
  }
  const id = req.body;
  const result = await recipeTagsModel.getTagsByRecipeId(id);
  if (result != null) {
    res.status(200).json({ success: true, payload: result });
  } else {
    res.status(404).json({
      success: false,
      error:
        "We couldn't find what you were looking for 😞. Does that tag exist?",
    });
  }
}

// create a new recipe/tag pair in the list
export async function createRecipesTag(req, res) {
  if (Object.keys(req.body).length !== 2) {
    res.status(400).json({
      success: false,
      error: "Invalid request 😞. Please review and try again!",
    });
  } else {
    const newTag = req.body;
    const result = await recipeTagsModel.createRecipesTag(newTag);
    if (result != null) {
      res.status(201).json({ success: true, payload: result });
    } else {
      res.status(500).json({
        success: false,
        error: "We couldn't add the tag 😞. Try again later!",
      });
    }
  }
}

// delete a recipe/tag pair by the recipe&tag id
export async function deleteRecipeTagByRecipeId(req, res) {
  if (Object.keys(req.body).length !== 2) {
    res.status(400).json({
      success: false,
      error: "Invalid request 😞. Please review and try again!",
    });
  } else {
    const recipeTagPair = req.body;
    const result = await recipeTagsModel.deleteRecipeTagByRecipeId(
      recipeTagPair
    );
    if (result != null) {
      res.status(200).json({ success: true, payload: result });
    } else {
      res.status(404).json({
        success: false,
        error:
          "We couldn't find what you were looking for 😞. Does that recipe/tag exist?",
      });
    }
  }
}

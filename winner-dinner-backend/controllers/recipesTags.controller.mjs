//will need to import tags models from /models/tags.js
import * as recipeTagsModel from "../models/recipeTagsModel.mjs";

//first request to return all tags
export async function getRecipesTags(req, res) {
  const result = await tagsModel.getRecipeTags();
  res.status(200).json({ success: true, payload: result });
}

//return all recipes by tagid
export async function getRecipesByTagId(req, res) {
  const id = Number(req.params.id);
  const result = await tagsModel.getRecipesByTagId(id);
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
  const id = Number(req.params.id);
  const result = await tagsModel.getTagsByRecipeId(id);
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
    const result = await tagsModel.createRecipesTag(newTag);
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
  const result = await tagsModel.deleteRecipeTagByRecipeId(recipeTagPair);
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
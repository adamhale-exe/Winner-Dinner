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

//return specific tag by recipeid
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

//will need to import tags models from /models/tags.js
import * as recipeTagsModel from "../models/recipeTagsModel.mjs";

//first request to return all tags
export async function getTags(req, res) {
    const result = await tagsModel.getTags();
    res.status(200).json({ success: true, payload: result });
  }
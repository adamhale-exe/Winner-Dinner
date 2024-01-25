//will need to import tags models from /models/tags.js
import * as tagsModel from "../models/tagsModel.mjs";

//first request to return all tags
export async function getTags(req, res) {
  const result = await tagsModel.getTags();
  res.status(200).json({ success: true, payload: result });
}

//return specific tag by id
export async function getTagById(req, res) {
  const id = Number(req.params.id);
  const result = await tagsModel.getTagById(id);
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

// create a new tag in the list
export async function createTag(req, res) {
  if (Object.keys(req.body).length !== 2) {
    res.status(400).json({
      success: false,
      error: "Invalid request 😞. Please review and try again!",
    });
  } else {
    const newTag = req.body;
    const result = await tagsModel.createTag(newTag);
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

// delete a tag
export async function deleteTagById(req, res) {
  const id = Number(req.params.id);
  const result = await tagsModel.deleteTagById(id);
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

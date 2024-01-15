//will need to import links models from /models/links.js
import * as linksModel from "../models/linksModel.js";

//first request to return all links
export async function getLinks(req, res) {
  const result = await linksModel.getLinks();
  res.status(200).json({ success: true, payload: result });
}

//return specific link by id
export async function getLinkById(req, res) {
  const id = Number(req.params.id);
  const result = await linksModel.getLinkById(id);
  if (result != null) {
    res.status(200).json({ success: true, payload: result });
  } else {
    res.status(404).json({
      success: false,
      error:
        "We couldn't find what you were looking for 😞. Does that link exist?",
    });
  }
}

// create a new link in the list
export async function createLink(req, res) {
  if (Object.keys(req.body).length !== 2) {
    res.status(400).json({
      success: false,
      error: "Invalid request 😞. Please review and try again!",
    });
  } else {
    const newLink = req.body;
    const result = await linksModel.createLink(newLink);
    if (result != null) {
      res.status(201).json({ success: true, payload: result });
    } else {
      res.status(500).json({
        success: false,
        error: "We couldn't add the link 😞. Try again later!",
      });
    }
  }
}

//update the details of an existing link
export async function updateLinkById(req, res) {
  const id = Number(req.params.id);
  const updateLink = req.body;
  const result = await linksModel.updateLinkById(id, updateLink);
  if (result != null) {
    res.status(200).json({ success: true, payload: result });
  } else {
    res.status(404).json({
      success: false,
      error:
        "We couldn't find what you were looking for 😞. Does that link exist?",
    });
  }
}

// delete a link
export async function deleteLinkById(req, res) {
  const id = Number(req.params.id);
  const result = await linksModel.deleteLinkById(id);
  if (result != null) {
    res.status(200).json({ success: true, payload: result });
  } else {
    res.status(404).json({
      success: false,
      error:
        "We couldn't find what you were looking for 😞. Does that link exist?",
    });
  }
}

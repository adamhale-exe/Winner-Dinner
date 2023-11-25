//will need to import proteins models from /models/proteins.js
import * as proteinsModel from "../models/proteinsModel.js";

//first request to return all proteins
export async function getProteins(req, res) {
  const result = await proteinsModel.getProteins();
  res.status(200).json({ success: true, payload: result });
}

//return specific protein by id
export async function getProteinById(req, res) {
  const id = Number(req.params.id);
  const result = await proteinsModel.getProteinById(id);
  if (result != null) {
    res.status(200).json({ success: true, payload: result });
  } else {
    res.status(404).json({
      success: false,
      error:
        "We couldn't find what you were looking for 😞. Does that protein exist?",
    });
  }
}

// create a new protein in the list
export async function createProtein(req, res) {
  if (Object.keys(req.body).length !== 2) {
    res.status(400).json({
      success: false,
      error: "Invalid request 😞. Please review and try again!",
    });
  } else {
    const newProtein = req.body;
    const result = await proteinsModel.createProtein(newProtein);
    if (result != null) {
      res.status(201).json({ success: true, payload: result });
    } else {
      res.status(500).json({
        success: false,
        error: "We couldn't add the protein 😞. Try again later!",
      });
    }
  }
}

//update the details of an existing protein
export async function updateProteinById(req, res) {
  const id = Number(req.params.id);
  const updateProtein = req.body;
  const result = await proteinsModel.updateProteinById(id, updateProtein);
  if (result != null) {
    res.status(200).json({ success: true, payload: result });
  } else {
    res.status(404).json({
      success: false,
      error:
        "We couldn't find what you were looking for 😞. Does that protein exist?",
    });
  }
}

// delete a protein
export async function deleteProteinById(req, res) {
  const id = Number(req.params.id);
  const result = await proteinsModel.deleteProteinById(id);
  if (result != null) {
    res.status(200).json({ success: true, payload: result });
  } else {
    res.status(404).json({
      success: false,
      error:
        "We couldn't find what you were looking for 😞. Does that protein exist?",
    });
  }
}

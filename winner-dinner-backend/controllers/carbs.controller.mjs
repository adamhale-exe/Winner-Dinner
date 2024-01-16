//will need to import carbs models from /models/carbs.js
import * as carbsModel from "../models/carbsModel.mjs";

//first request to return all carbs
export async function getCarbs(req, res) {
  const result = await carbsModel.getCarbs();
  res.status(200).json({ success: true, payload: result });
}

//return specific carb by id
export async function getCarbById(req, res) {
  const id = Number(req.params.id);
  const result = await carbsModel.getCarbById(id);
  if (result != null) {
    res.status(200).json({ success: true, payload: result });
  } else {
    res.status(404).json({
      success: false,
      error:
        "We couldn't find what you were looking for 😞. Does that carb exist?",
    });
  }
}

// create a new carb in the list
export async function createCarb(req, res) {
  if (Object.keys(req.body).length !== 2) {
    res.status(400).json({
      success: false,
      error: "Invalid request 😞. Please review and try again!",
    });
  } else {
    const newCarb = req.body;
    const result = await carbsModel.createCarb(newCarb);
    if (result != null) {
      res.status(201).json({ success: true, payload: result });
    } else {
      res.status(500).json({
        success: false,
        error: "We couldn't add the carb 😞. Try again later!",
      });
    }
  }
}

//update the details of an existing carb
export async function updateCarbById(req, res) {
  const id = Number(req.params.id);
  const updateCarb = req.body;
  const result = await carbsModel.updateCarbById(id, updateCarb);
  if (result != null) {
    res.status(200).json({ success: true, payload: result });
  } else {
    res.status(404).json({
      success: false,
      error:
        "We couldn't find what you were looking for 😞. Does that carb exist?",
    });
  }
}

// delete a carb
export async function deleteCarbById(req, res) {
  const id = Number(req.params.id);
  const result = await carbsModel.deleteCarbById(id);
  if (result != null) {
    res.status(200).json({ success: true, payload: result });
  } else {
    res.status(404).json({
      success: false,
      error:
        "We couldn't find what you were looking for 😞. Does that carb exist?",
    });
  }
}

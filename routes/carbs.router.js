import express from "express";
const router = express.Router();

import {
  getCarbs,
  getCarbById,
  createCarb,
  updateCarbById,
  deleteCarbById,
} from "../controllers/carbs.controller.js";

router.get("/carbs", async (req, res) => {
  const result = await getCarbs();
  res.status(200).json({ success: true, payload: result });
});

router.get("/carbs/:id", async (req, res) => {
  const id = Number(req.params.id);
  const result = await getCarbById(id);
  res.status(200).json({ success: true, payload: result });
});

router.post("/carbs", async (req, res) => {
  const newCarb = req.body;
  const result = await createCarb(newCarb);
  res.status(201).json({ success: true, payload: result });
});

router.patch("/carbs/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updateCarb = req.body;
  const result = await updateCarbById(id, updateCarb);
  res.status(200).json({ success: true, payload: result });
});

router.delete("/carbs/:id", async (req, res) => {
  const id = Number(req.params.id);
  const result = await deleteCarbById(id);
  res.status(200).json({ success: true, payload: result });
});

export default router;

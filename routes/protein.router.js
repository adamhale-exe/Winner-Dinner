import express from "express";
const router = express.Router();

import {
  getProteins,
  getProteinById,
  createProtein,
  updateProteinById,
  deleteProteinById,
} from "../controllers/proteins.controller.js";

router.get("/proteins", async (req, res) => {
  const result = await getProteins();
  res.status(200).json({ success: true, payload: result });
});

router.get("/proteins/:id", async (req, res) => {
  const id = Number(req.params.id);
  const result = await getProteinById(id);
  res.status(200).json({ success: true, payload: result });
});

router.post("/proteins", async (req, res) => {
  const newProtein = req.body;
  const result = await createProtein(newProtein);
  res.status(201).json({ success: true, payload: result });
});

router.patch("/proteins/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updateProtein = req.body;
  const result = await updateProteinById(id, updateProtein);
  res.status(200).json({ success: true, payload: result });
});

router.delete("/proteins/:id", async (req, res) => {
  const id = Number(req.params.id);
  const result = await deleteProteinById(id);
  res.status(200).json({ success: true, payload: result });
});

export default router;

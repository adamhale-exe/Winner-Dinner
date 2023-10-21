import express from "express";
const router = express.Router();

import {
  getLinks,
  getLinkById,
  createLink,
  updateLinkById,
  deleteLinkById,
} from "../controllers/links.controller.js";

router.get("/Links", async (req, res) => {
  const result = await getLinks();
  res.status(200).json({ success: true, payload: result });
});

router.get("/Links/:id", async (req, res) => {
  const id = Number(req.params.id);
  const result = await getLinkById(id);
  res.status(200).json({ success: true, payload: result });
});

router.post("/Links", async (req, res) => {
  const newLink = req.body;
  const result = await createLink(newLink);
  res.status(201).json({ success: true, payload: result });
});

router.patch("/Links/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updateLink = req.body;
  const result = await updateLinkById(id, updateLink);
  res.status(200).json({ success: true, payload: result });
});

router.delete("/Links/:id", async (req, res) => {
  const id = Number(req.params.id);
  const result = await deleteLinkById(id);
  res.status(200).json({ success: true, payload: result });
});

export default router;

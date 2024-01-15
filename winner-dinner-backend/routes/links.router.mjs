import express from "express";

import * as linksController from "../controllers/links.controller.mjs";

export const linksRouter = express.Router();

linksRouter.get("/", linksController.getLinks);

linksRouter.get("/:id", linksController.getLinkById);

linksRouter.post("/", linksController.createLink);

linksRouter.patch("/:id", linksController.updateLinkById);

linksRouter.delete("/:id", linksController.deleteLinkById);

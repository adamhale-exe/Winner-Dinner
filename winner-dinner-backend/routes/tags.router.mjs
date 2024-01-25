import express from "express";

import * as tagsController from "../controllers/tags.controller.mjs";

export const tagsRouter = express.Router();

tagsRouter.get("/", tagsController.getTags);

tagsRouter.get("/:id", tagsController.getTagById);

tagsRouter.post("/", tagsController.createTag);

tagsRouter.delete("/:id", tagsController.deleteTagById);

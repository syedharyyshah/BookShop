import express from "express";
import { getlBook } from "../controller/lbook.controller.js"; 

const router = express.Router();
router.get("/", getlBook);

export default router;
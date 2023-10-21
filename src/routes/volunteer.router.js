import { Router } from "express";
import { getAllVolunteers } from "../controllers/volunteer.controller.js";

const router = Router();

// get all volunteers
router.get("/", getAllVolunteers);

// get volunteer by id
router.get("/:uid");

// register
router.post("/register");

export default router;

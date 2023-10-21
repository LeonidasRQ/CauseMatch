import { Router } from "express";

const router = Router();

// get all users
router.get("/");

// get user by id
router.get("/:uid");

// register
router.post("/register");

// login
router.post("/login");

// logout
router.post("/logout");

export default router;

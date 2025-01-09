import express from "express";
import { getAllUsers, getNewUsers, getUserDetails, special } from "../controllers/user.js";

export const router = express.Router();

router.get("/all", getAllUsers)

router.post("/new", getNewUsers)

router.get("/userid/special", special)

router.get("/userid/:id", getUserDetails)

export default router;
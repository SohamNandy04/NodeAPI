import express from "express";
import { getAllUsers, getNewUsers, getUserDetails, special, updateUser, deleteUser } from "../controllers/user.js";

export const router = express.Router();

router.get("/all", getAllUsers)

router.post("/new", getNewUsers)

router.get("/userid/special", special)

router.route("/userid/:id").get(getUserDetails).put(updateUser).delete(deleteUser)

// router.get("/userid/:id", getUserDetails)

// router.put("/userid/:id", updateUser)

// router.delete("/userid/:id", deleteUser)

export default router;
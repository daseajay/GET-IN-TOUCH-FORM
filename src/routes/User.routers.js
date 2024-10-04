import { Router } from "express";
import { sendEmail } from "../controllers/User.controllers.js";
const router = Router();
router.route("/getin").post(sendEmail);
export default router;

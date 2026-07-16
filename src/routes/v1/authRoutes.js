import express from "express";
import { login, register } from "../../controllers/authController.js";
import authMiddleware from "../../middleware/authMiddleware.js";
import { validateRegister, validateLogin} from "../../middleware/validationMiddleware.js";

const router = express.Router();

router.post("/register", validateRegister, register);

router.post("/login", validateLogin, login);

router.get("/me", authMiddleware, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});

export default router;
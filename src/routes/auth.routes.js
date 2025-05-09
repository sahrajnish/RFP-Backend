import express from "express";
import handleLoginUser from "../controllers/auth/login.controller.js";
import handleRegisterUser from "../controllers/auth/register.controller.js";
import handleRegisterVendor from "../controllers/auth/registervendor.controller.js";
import handleForgetPassword from "../controllers/auth/forgetpassword.controller.js";

const router = express.Router();

router.post('/login', handleLoginUser);
router.post('/register', handleRegisterUser);
router.post('/registervendor', handleRegisterVendor);
router.post('/forgetpassword', handleForgetPassword);

export default router;
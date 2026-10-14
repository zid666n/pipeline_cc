import { Router } from "express";
import login from "../modules/auth/infrastructures/controllers/authController.ts";
import { loginUserSchema } from "../modules/auth/infrastructures/validations/loginValidation.ts";
import { validateRequest } from "../modules/shared/infrastructure/middlewares/validateRequest.ts";

const authRouter = Router()

authRouter.post('/login', validateRequest(loginUserSchema), login)

export default authRouter
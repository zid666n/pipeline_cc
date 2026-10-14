import { Router } from "express";
import { store } from "../modules/user/application/controllers/userController.ts";
import { validateRequest } from "../modules/shared/infrastructure/middlewares/validateRequest.ts";
import { registerUserSchema } from "../modules/user/infrastructure/validations/registerValidation.ts";
// import { destroy, index, read, store, update } from "../modules/user/application/controllers/userController.ts";

const userRouter = Router()

// userRouter.get('/', index)
// userRouter.get('/:id', read)
userRouter.post('/', validateRequest(registerUserSchema), store)
// userRouter.put('/:id', update)
// userRouter.delete('/:id', destroy)

export default userRouter
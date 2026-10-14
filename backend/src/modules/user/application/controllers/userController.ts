import type { Request, Response } from "express"
import createUserUsecase from "../usecases/createUserUsecase.ts"
import type { TRegisterPayload } from "../../infrastructure/validations/registerValidation.ts"

export const store = async (req: Request, res: Response) => {
    const { email, name, password, role }: TRegisterPayload = req.body

    const result = await createUserUsecase({
        email,
        name,
        password,
        role
    })

    return res
        .status(200)
        .json({
            data: {
                user: result
            }
        })
}

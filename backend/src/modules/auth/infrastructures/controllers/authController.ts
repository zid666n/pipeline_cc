import type { Request, Response } from "express"
import useLoginUsecase from "../../application/usecases/useLoginUsecase.ts"

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body
    const user = await useLoginUsecase({ email: email, password: password })

    return res
        .status(200)
        .json({
            data: {
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
                token: user.token
            }
        })
}

export default login
import prisma from "../../../../core/databases/prisma.ts"
import type { TRegisterPayload, TRegisterResult } from "../../../shared/application/types/user.type.ts"

export const createUser = async (payload: TRegisterPayload): Promise<TRegisterResult> => {
    const user = await prisma.user.create({
        data: {
            name: payload.name,
            email: payload.email,
            passwordHash: payload.password,
            role: payload.role
        }
    })

    return {
        id: Number(user.id),
        name: user.name,
        email: user.email,
        role: user.role
    }
}
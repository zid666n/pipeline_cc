import prisma from "../../../../core/databases/prisma.ts"
import type { TCreateChannelPayload } from "../validations/createChannelValidation.ts"

export const createChannel = async (data: TCreateChannelPayload) => {
    const res = await prisma.channel.create({
        data: {
            userId: data.userId,
            platform: data.platform,
            handleName: data.handleName
        }
    })

    return res
}
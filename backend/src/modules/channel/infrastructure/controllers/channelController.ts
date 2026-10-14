import type { Request, Response } from "express"
import type { TCreateChannelPayload } from "../validations/createChannelValidation.ts";
import createChannelUsecase from "../../application/usecases/createChannelUsecase.ts";

export const store = async (req: Request, res: Response) => {
    const { handleName, platform, userId }: TCreateChannelPayload = req.body

    const result = await createChannelUsecase({
        userId: userId,
        handleName: handleName,
        platform: platform
    })

    return res
        .status(200)
        .json({
            message: "Channel berhasil dibuat",
            data: result
        })
}
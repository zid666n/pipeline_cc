import type { TCreateChannelPayload } from "../../infrastructure/validations/createChannelValidation.ts";
import { createChannel } from "../../infrastructure/repositories/channelRepository.ts";
import validateUserByIdService from "../../../shared/infrastructure/services/validateUserByIdService.ts";

const createChannelUsecase = async (payload: TCreateChannelPayload) => {
    await validateUserByIdService(payload.userId)

    return await createChannel(payload)
}

export default createChannelUsecase
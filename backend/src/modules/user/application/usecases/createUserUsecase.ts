import type { TRegisterPayload, TRegisterResult } from "../../../shared/application/types/user.type.ts"
import { hashService } from "../../../shared/infrastructure/services/hashService.ts"
import { createUser } from "../../infrastructure/repositories/userRepository.ts"

const createUserUsecase = async (payload: TRegisterPayload): Promise<TRegisterResult> => {
    payload.password = hashService(payload.password)
    const result = await createUser(payload)

    return result
}

export default createUserUsecase
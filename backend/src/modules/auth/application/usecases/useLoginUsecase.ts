import loginService from "../../../shared/infrastructure/services/loginService.ts"
import type { TLoginPayload } from "../../infrastructures/validations/loginValidation.ts"

const useLoginUsecase = async (payload: TLoginPayload) => {
    const res = await loginService(payload)

    return res
}

export default useLoginUsecase
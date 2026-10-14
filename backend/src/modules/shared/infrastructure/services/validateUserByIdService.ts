import prisma from "../../../../core/databases/prisma.ts"
import ItemNotFoundError from "../../application/exceptions/ItemNotFoundError.ts"

const validateUserByIdService = async (id: number): Promise<void> => {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    })

    if (!user) throw new ItemNotFoundError('Pengguna')
}

export default validateUserByIdService

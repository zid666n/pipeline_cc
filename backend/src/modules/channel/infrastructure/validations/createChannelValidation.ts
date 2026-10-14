import z from "zod"

export const createChannelSchema = z.object({
    userId: z.number().min(1, "User ID wajib diisi"),
    platform: z.string().min(1, "Platform wajib diisi"),
    handleName: z.string().min(1, "Nama akun wajib diisi")
})

export type TCreateChannelPayload = z.infer<typeof createChannelSchema>

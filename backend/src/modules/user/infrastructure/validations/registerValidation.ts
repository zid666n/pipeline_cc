import { z } from "zod"

export const registerUserSchema = z.object({
    name: z.string().min(3, "Nama minimal 3 karakter").max(100),
    email: z.string().email("Format email tidak valid"),
    password: z.string().min(6, "Password minimal 6 karakter"),
    role: z.enum(["creator", "editor", "admin"], {
        message: "Role harus creator, editor, atau admin"
    }).default("creator")
})

export type TRegisterPayload = z.infer<typeof registerUserSchema>
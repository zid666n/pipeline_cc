import z from "zod";

export const loginUserSchema = z.object({
    email: z.string().email("Format email tidak valid"),
    password: z.string().min(1, "Password wajib diisi")
})

export type TLoginPayload = z.infer<typeof loginUserSchema>
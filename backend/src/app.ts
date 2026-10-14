import express, { type NextFunction, type Request, type Response } from "express"
import cors from "cors"
import ApplicationException from "./modules/shared/application/exceptions/ApplicationException.ts"
import userRouter from "./routes/userRouter.ts"
import authMiddleware from "./modules/shared/infrastructure/middlewares/authMiddleware.ts"
import authRouter from "./routes/authRouter.ts"
import channelRouter from "./routes/channelRouter.ts"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRouter)

app.use(authMiddleware)
app.use('/api/users', userRouter)
app.use('/api/v1/channels', channelRouter)

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to POS API"
    })
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApplicationException) {
        return res
            .status(err.statusCode)
            .json({
                message: err.message
            })


    } else {
        throw err
        // return res
        //     .status(500)
        //     .json({
        //         message: err.message
        //     })
    }

})

export default app
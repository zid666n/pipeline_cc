import { Router } from "express";
import { store } from "../modules/channel/infrastructure/controllers/channelController.ts";

const channelRouter = Router()

channelRouter.post('/', store)

export default channelRouter
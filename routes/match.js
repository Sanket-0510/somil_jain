import express from 'express'
const matchRouter = express.Router()
import {createMatchController} from "../controller/match.js"
import { auth } from '../middlewares/auth.js'


matchRouter.post("/create",auth, createMatchController)

export {matchRouter}
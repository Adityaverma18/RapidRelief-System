import express from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { applyForRescue, getMyTasks } from '../controllers/rescue.controllers.js'
import { allowRoles } from '../middleware/role.middleware.js'

const rescueRouter = express.Router()

// apply for rescue
rescueRouter.post("/apply", authMiddleware, applyForRescue)

//get assigned task
rescueRouter.get("/tasks", authMiddleware, allowRoles("RESCUE"), getMyTasks)

export default rescueRouter;
import express from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { allowRoles } from '../middleware/role.middleware.js'
import { assignRescue, updateTaskStatus } from '../controllers/assignment.controllers.js'



const assignmentRouter = express.Router()

assignmentRouter.post("/assign", authMiddleware, allowRoles("ADMIN"), assignRescue)

assignmentRouter.patch("/status", authMiddleware, allowRoles("RESCUE"), updateTaskStatus)

export default assignmentRouter
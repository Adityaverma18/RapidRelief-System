import express from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'
import { allowRoles } from '../middleware/role.middleware.js'
import { approveRescue, getPendingRescues } from '../controllers/admin.controllers.js'


const adminRouter = express.Router()

adminRouter.get("/pendingRescue", authMiddleware, allowRoles("ADMIN"), getPendingRescues)

adminRouter.patch("/approve/:userId", authMiddleware, allowRoles("ADMIN"), approveRescue)

export default adminRouter
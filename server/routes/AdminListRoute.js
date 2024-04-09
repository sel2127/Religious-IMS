import express from "express";
import {
    getAdmins,
    getAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin
} from "../controllers/AdminList.js";


const router = express.Router();

router.get('/admin', getAdmins);
router.get('/admin/:id', getAdminById);
router.post('/admin', createAdmin);
router.patch('/admin/:id', updateAdmin);
router.delete('/admin/:id', deleteAdmin);

export default router;
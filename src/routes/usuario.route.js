import express from 'express';
import UsuarioController from '../../controllers/usuario.controler.js';

const router = express.Router();
const crtl = new UsuarioController();

router.post("/criar", crtl.criar);
router.get("/listar", crtl.lsitar);
router.get("/buscar/:id", crtl.buscar)


export default router; 
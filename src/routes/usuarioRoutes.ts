// Importa el enrutador de Express
import { Router } from 'express';

// Importa los controladores para manejar las rutas de usuario
import { crearUsuario, obtenerUsuarios } from '../controllers/usuarioController';

// Crea una instancia del enrutador de Express
const router = Router();

// Define una ruta GET para obtener todos los usuarios
router.get('/usuarios', obtenerUsuarios);

// Define una ruta POST para crear un nuevo usuario
router.post('/registro', crearUsuario);

// Exporta el enrutador para que pueda ser utilizado en otros archivos
export default router;
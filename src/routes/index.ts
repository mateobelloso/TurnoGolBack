// Importa las dependencias necesarias de Express
import { Router, Request, Response } from 'express';

// Importa las rutas definidas en el archivo usuarioRoutes.ts
import usuarioRoutes from './usuarioRoutes';

// Crea una instancia del enrutador de Express
const router = Router();

// Define una ruta GET para la raíz del sitio que responde con un mensaje
router.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!!');
});

// Usa las rutas definidas en usuarioRoutes.ts bajo el prefijo /api
router.use('/api', usuarioRoutes);

// Exporta el enrutador para que pueda ser utilizado en otros archivos
export default router;
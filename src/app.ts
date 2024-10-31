import express, { Request, Response } from 'express';
import Usuario from './models/Usuario';
import sequelize from './database/config';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




const iniciar = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida.');

    // Ejemplo de uso
    const usuarioService = new Usuario();
    /*const nuevoUsuario = await usuarioService.crearUsuario({
      token: 'token123',
      password: 'password',
      nombre: 'Juan Perez',
      tipo_documento: null,
      numero_documento: null,
      email: 'juan.perez@example.com',
      localidad: null,
      telefono: null,
      estado_id: null,
      fecha_cambio_estado: null,
      usuario_cambio_estado: null,
      creado_por: null,
    });*/
    const usuarios= usuarioService.obtenerTodos();
    console.log('Usuarios: ', await usuarios);

  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

iniciar();
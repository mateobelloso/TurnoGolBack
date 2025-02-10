// Importa las dependencias necesarias de Express
import express, { Request, Response } from 'express';

// Importa las rutas definidas en el archivo index.ts
import routes from './routes/index';

// Crea una instancia de la aplicación Express
const app = express();

// Middleware para parsear las solicitudes con formato JSON
app.use(express.json());

// Usa las rutas definidas en el archivo index.ts
app.use(routes);

// Define el puerto en el que el servidor escuchará las solicitudes
const PORT = process.env.PORT || 3000;

// Inicia el servidor y escucha en el puerto definido
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//EJEMPLO QUE YA NO IRIA PERO LO DEJO POR LAS DUDAS
/*const iniciar = async () => {
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
    /*const usuarios= usuarioService.obtenerTodos();
    console.log('Usuarios: ', await usuarios);

  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

//iniciar();*/
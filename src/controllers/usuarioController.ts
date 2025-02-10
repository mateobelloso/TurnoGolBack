// Importa las dependencias necesarias de Express
import { Request, Response } from 'express';

// Importa el modelo de Usuario
import Usuario from '../models/usuario';

// Función que permite crear un usuario (faltan los verdaderos atributos de la tabla)
const crearUsuario = async (req: Request, res: Response) => {
  const { id, token } = req.body; // Obtiene los datos del cuerpo de la solicitud
  try {
    const user = new Usuario(); // Crea una nueva instancia del modelo Usuario
    const newUser = await user.crearUsuario({ id, token }); // Llama al método crearUsuario del modelo
    res.status(201).json(newUser); // Responde con el nuevo usuario creado y un estado 201
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' }); // Maneja errores y responde con un estado 500
  }
};

// Función que permite obtener todos los usuarios
const obtenerUsuarios = async (req: Request, res: Response) => {
  try {
    const user = new Usuario(); // Crea una nueva instancia del modelo Usuario
    const usuarios = await user.obtenerTodos(); // Llama al método obtenerTodos del modelo
    res.status(201).json(usuarios); // Responde con la lista de usuarios y un estado 201
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving users' }); // Maneja errores y responde con un estado 500
  }
};

// Exporta las funciones para que puedan ser utilizadas en otros archivos
export { crearUsuario, obtenerUsuarios };
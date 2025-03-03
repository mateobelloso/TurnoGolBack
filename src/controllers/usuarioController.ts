// Importa las dependencias necesarias de Express
import { Request, Response } from 'express';

// Importa el modelo de Usuario
import Usuario from '../models/usuario';
import { UsuarioAttributes } from '../models/interfaces/UsuarioAttributes';

// Función que permite crear un usuario (faltan los verdaderos atributos de la tabla)
const crearUsuario = async (req: Request, res: Response) => {
  const { email, password, confirmPassword, nombre, apellido, tipoDocumento, documento, localidad, telefono } = req.body; // Obtiene los datos del cuerpo de la solicitud
  //console.log(email, password, confirmPassword, nombre, apellido, tipoDocumento, documento, localidad, telefono);

  // Verificar que todos los campos estén completos
  if (!email || !password || !confirmPassword || !nombre || !apellido || !tipoDocumento || !localidad || !telefono) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  const token = "token";
  const fecha_creacion = new Date();

  const nuevoUsuario: Partial<UsuarioAttributes> = 
  {
    id: 2,
    token,
    password,
    nombre: nombre + " " + apellido,
    tipo_documento: '1' as string,
    numero_documento: documento as string,
    email,
    localidad,
    telefono,
    estado_id: null,
    fecha_cambio_estado: null,
    fecha_creacion,
    usuario_cambio_estado: null,
    creado_por: null,
    borrado_por: null
  };


  try {
    const user = new Usuario(); // Crea una nueva instancia del modelo Usuario
    const newUser = await user.crearUsuario(nuevoUsuario); // Llama al método crearUsuario del modelo
    console.log(newUser);
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
    res.status(500).json({ error: error }); // Maneja errores y responde con un estado 500
  }
};

// Exporta las funciones para que puedan ser utilizadas en otros archivos
export { crearUsuario, obtenerUsuarios };
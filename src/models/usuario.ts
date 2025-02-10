// Importa el modelo de Usuario definido en Sequelize
import UsuarioModel from './definitions/UsuarioModel';

// Importa la interfaz de los atributos del usuario
import { UsuarioAttributes } from './interfaces/UsuarioAttributes';

// Define la clase Usuario que encapsula la lógica de negocio relacionada con los usuarios
class Usuario {
  // Propiedad privada que contiene el modelo de Usuario
  private model = UsuarioModel;

  // Método para obtener un usuario por su ID
  public async obtenerPorId(id: number): Promise<UsuarioAttributes | null> {
    return await this.model.findByPk(id); // Busca un usuario por su clave primaria (ID)
  }

  // Método para crear un nuevo usuario
  public async crearUsuario(data: Partial<UsuarioAttributes>): Promise<UsuarioAttributes> {
    const usuario = await this.model.create(data as UsuarioAttributes); // Crea un nuevo usuario con los datos proporcionados
    return usuario; // Retorna el usuario creado
  }

  // Método para obtener todos los usuarios
  public async obtenerTodos(): Promise<UsuarioModel[]> {
    const usuarios = await this.model.findAll(); // Obtiene todos los usuarios de la base de datos
    return usuarios; // Retorna la lista de usuarios
  }

  // Otros métodos específicos de la clase
}

// Exporta la clase Usuario para que pueda ser utilizada en otros archivos
export default Usuario;
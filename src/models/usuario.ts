import UsuarioModel from './definitions/UsuarioModel';
import { UsuarioAttributes } from './interfaces/UsuarioAttributes';

class Usuario {
  private model = UsuarioModel;

  public async obtenerPorId(id: number): Promise<UsuarioAttributes | null> {
    return await this.model.findByPk(id);
  }

  public async crearUsuario(data: Partial<UsuarioAttributes>): Promise<UsuarioAttributes> {
    const usuario = await this.model.create(data as UsuarioAttributes);
    return usuario;
  }

  public async obtenerTodos(): Promise<UsuarioModel[]> {
    const usuarios = await this.model.findAll();
    return usuarios;
  }

  // Otros métodos específicos de la clase
}

export default Usuario;

// Importa DataTypes y Model de Sequelize para definir el modelo
import { DataTypes, Model } from 'sequelize';

// Importa la configuración de la base de datos
import sequelize from '../../database/config';

// Importa la interfaz de los atributos del usuario
import { UsuarioAttributes } from '../interfaces/UsuarioAttributes';

// Define la clase UsuarioModel que extiende Model e implementa UsuarioAttributes
class UsuarioModel extends Model<UsuarioAttributes> implements UsuarioAttributes {
  public id!: number; // Identificador único del usuario
  public token!: string; // Token de autenticación del usuario
  public password!: string; // Contraseña del usuario
  public nombre!: string; // Nombre del usuario
  public tipo_documento!: string; // Tipo de documento del usuario
  public numero_documento!: string; // Número de documento del usuario
  public email!: string; // Correo electrónico del usuario
  public localidad!: string; // Localidad del usuario
  public telefono!: string; // Teléfono del usuario
  public estado_id!: number; // Identificador del estado del usuario
  public fecha_cambio_estado!: Date; // Fecha del último cambio de estado del usuario
  public fecha_creacion!: Date; // Fecha de creación del usuario
  public usuario_cambio_estado!: string; // Usuario que realizó el último cambio de estado
  public creado_por!: string; // Usuario que creó el registro
  public borrado_por!: string | null; // Usuario que borró el registro (puede ser nulo)
}

// Inicializa el modelo UsuarioModel con sus atributos y opciones
UsuarioModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, // Identificador único autoincremental
    token: { type: DataTypes.STRING, allowNull: false }, // Token de autenticación, no puede ser nulo
    password: { type: DataTypes.STRING, allowNull: false }, // Contraseña, no puede ser nulo
    nombre: { type: DataTypes.STRING, allowNull: false }, // Nombre, no puede ser nulo
    tipo_documento: { type: DataTypes.STRING, allowNull: true }, // Tipo de documento, puede ser nulo
    numero_documento: { type: DataTypes.STRING, allowNull: true }, // Número de documento, puede ser nulo
    email: { type: DataTypes.STRING, allowNull: false, unique: true }, // Correo electrónico, no puede ser nulo y debe ser único
    localidad: { type: DataTypes.STRING, allowNull: true }, // Localidad, puede ser nulo
    telefono: { type: DataTypes.STRING, allowNull: true }, // Teléfono, puede ser nulo
    estado_id: { type: DataTypes.INTEGER, allowNull: true }, // Identificador del estado, puede ser nulo
    fecha_cambio_estado: { type: DataTypes.DATE, allowNull: true }, // Fecha del último cambio de estado, puede ser nulo
    fecha_creacion: { type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.NOW }, // Fecha de creación, valor por defecto es la fecha actual
    usuario_cambio_estado: { type: DataTypes.STRING, allowNull: true }, // Usuario que realizó el último cambio de estado, puede ser nulo
    creado_por: { type: DataTypes.STRING, allowNull: true }, // Usuario que creó el registro, puede ser nulo
    borrado_por: { type: DataTypes.STRING, allowNull: true }, // Usuario que borró el registro, puede ser nulo
  },
  {
    sequelize, // Instancia de Sequelize para la conexión a la base de datos
    tableName: 'usuarios', // Nombre de la tabla en la base de datos
    timestamps: false, // Desactiva los timestamps automáticos (createdAt, updatedAt)
  }
);

// Exporta el modelo para que pueda ser utilizado en otros archivos
export default UsuarioModel;
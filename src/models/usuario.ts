import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

interface UsuarioAttributes {
  id: number;
  token: string;
  password: string;
  nombre: string;
  tipo_documento: string;
  numero_documento: string;
  email: string;
  localidad: string;
  telefono: string;
  estado_id: number;
  fecha_cambio_estado: Date;
  fecha_creacion: Date;
  usuario_cambio_estado: string;
  creado_por: string;
  borrado_por: string | null; // Permitir nulo si el campo puede estar vacío
}

class Usuario extends Model<UsuarioAttributes> implements UsuarioAttributes {
  public id!: number;
  public token!: string;
  public password!: string;
  public nombre!: string;
  public tipo_documento!: string;
  public numero_documento!: string;
  public email!: string;
  public localidad!: string;
  public telefono!: string;
  public estado_id!: number;
  public fecha_cambio_estado!: Date;
  public fecha_creacion!: Date;
  public usuario_cambio_estado!: string;
  public creado_por!: string;
  public borrado_por!: string | null;
}

// Inicializa el modelo con Sequelize
Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo_documento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero_documento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    localidad: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    estado_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_cambio_estado: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    usuario_cambio_estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creado_por: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    borrado_por: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize, // Conexión de base de datos
    tableName: 'usuarios',
    timestamps: false, // No se crean columnas de timestamps automáticos
  }
);

export default Usuario;

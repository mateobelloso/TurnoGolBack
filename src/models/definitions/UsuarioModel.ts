import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database/config';
import { UsuarioAttributes } from '../interfaces/UsuarioAttributes';

class UsuarioModel extends Model<UsuarioAttributes> implements UsuarioAttributes {
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

UsuarioModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    token: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false },
    tipo_documento: { type: DataTypes.STRING, allowNull: true },
    numero_documento: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    localidad: { type: DataTypes.STRING, allowNull: true },
    telefono: { type: DataTypes.STRING, allowNull: true },
    estado_id: { type: DataTypes.INTEGER, allowNull: true },
    fecha_cambio_estado: { type: DataTypes.DATE, allowNull: true },
    fecha_creacion: { type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.NOW },
    usuario_cambio_estado: { type: DataTypes.STRING, allowNull: true },
    creado_por: { type: DataTypes.STRING, allowNull: true },
    borrado_por: { type: DataTypes.STRING, allowNull: true },
  },
  {
    sequelize,
    tableName: 'usuarios',
    timestamps: false,
  }
);

export default UsuarioModel;

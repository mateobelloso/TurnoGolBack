// Importa Sequelize para manejar la conexión a la base de datos
import { Sequelize } from 'sequelize';

// Importa dotenv para manejar variables de entorno
import dotenv from 'dotenv';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Crea una instancia de Sequelize para conectarse a la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME as string, // Nombre de la base de datos
  process.env.DB_USER as string, // Usuario de la base de datos
  process.env.DB_PASSWORD as string, // Contraseña de la base de datos
  {
    host: process.env.DB_HOST, // Host de la base de datos
    dialect: 'postgres', // Dialecto de la base de datos (PostgreSQL en este caso)
    port: parseInt(process.env.DB_PORT || '5432'), // Puerto de la base de datos
    logging: false, // Desactiva el registro de consultas SQL en la consola
  }
);

// Exporta la instancia de Sequelize para que pueda ser utilizada en otros archivos
export default sequelize;
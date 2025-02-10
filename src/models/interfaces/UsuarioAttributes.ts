// Define una interfaz para los atributos del modelo Usuario
export interface UsuarioAttributes {
  id: number; // Identificador único del usuario
  token: string; // Token de autenticación del usuario
  password: string; // Contraseña del usuario
  nombre: string; // Nombre del usuario
  tipo_documento: string | null; // Tipo de documento del usuario (puede ser nulo)
  numero_documento: string | null; // Número de documento del usuario (puede ser nulo)
  email: string; // Correo electrónico del usuario
  localidad: string | null; // Localidad del usuario (puede ser nulo)
  telefono: string | null; // Teléfono del usuario (puede ser nulo)
  estado_id: number | null; // Identificador del estado del usuario (puede ser nulo)
  fecha_cambio_estado: Date | null; // Fecha del último cambio de estado del usuario (puede ser nulo)
  fecha_creacion: Date | null; // Fecha de creación del usuario (puede ser nulo)
  usuario_cambio_estado: string | null; // Usuario que realizó el último cambio de estado (puede ser nulo)
  creado_por: string | null; // Usuario que creó el registro (puede ser nulo)
  borrado_por: string | null; // Usuario que borró el registro (puede ser nulo)
}
export interface UsuarioAttributes {
    id: number;
    token: string;
    password: string;
    nombre: string;
    tipo_documento: string | null;
    numero_documento: string | null;
    email: string;
    localidad: string | null;
    telefono: string | null;
    estado_id: number | null;
    fecha_cambio_estado: Date | null;
    fecha_creacion: Date | null;
    usuario_cambio_estado: string | null;
    creado_por: string | null;
    borrado_por: string | null;
  }
  
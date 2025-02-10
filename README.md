# TurnoGol Backend

Este es el backend de la aplicación **TurnoGol**, desarrollado en **Node.js** con **TypeScript**. Este proyecto permite gestionar las funcionalidades principales del backend y está diseñado para ser ejecutado localmente.

---

## 🚀 **Requisitos previos**

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 18 o superior recomendada)
- **npm** (incluido con Node.js)
- **TypeScript** (se instala automáticamente con las dependencias)
- **Git** (para clonar el repositorio)
- Archivo `.env` con las variables de entorno requeridas (ver más abajo).

---

## 📦 **Instalación**

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clonar el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd TurnoGolBack
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   npm install --save-dev ts-node typescript
   ```

3. **Configurar variables de entorno**
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=tu_usuario
   DB_PASS=tu_contraseña
   DB_NAME=nombre_base_datos
   ```

   **Nota**: Consulta al administrador del proyecto para obtener los valores correctos si no los tienes.

4. **Ejecutar el proyecto en modo desarrollo**
   ```bash
   npm run dev
   ```

   Esto ejecutará el proyecto con **nodemon**, reiniciándolo automáticamente si detecta cambios.

5. **Compilar para producción (opcional)**
   Si necesitas compilar el proyecto para producción:
   ```bash
   npm run build
   ```

   Luego, puedes ejecutarlo con:
   ```bash
   npm start
   ```

---

## 🛠️ **Estructura del proyecto**

El proyecto está organizado de la siguiente manera (Esto a revisar aún):

```
src/
├── controllers/   # Controladores para manejar la lógica de negocio
├── models/        # Definiciones de los modelos de datos
├── routes/        # Definición de rutas para la API
├── middlewares/   # Middlewares personalizados
├── app.ts         # Punto de entrada principal
├── config/        # Configuración general (incluyendo base de datos)
```

---

## 🌐 **Endpoints principales**

Estos a desarrollar aun y pueden cambiar

| Método | Ruta              | Descripción                          | Estado          |
|--------|-------------------|--------------------------------------|-----------------|
| GET    | /api/usuarios     | Obtiene la lista de usuarios         | ✅ Implementado |
| POST   | /api/usuarios     | Crea un nuevo usuario                | ❌ Pendiente    |
| PUT    | /api/usuarios/:id | Actualiza un usuario existente       | ❌ Pendiente    |
| DELETE | /api/usuarios/:id | Elimina un usuario                   | ❌ Pendiente    |

---

## 💻 **Ejecutar pruebas**

(Si tienes pruebas configuradas, incluye esta sección, de lo contrario puedes omitirla).

Para ejecutar las pruebas, usa el siguiente comando:
```bash
npm test
```

---

## 📖 **Notas importantes**

- Asegúrate de usar la misma versión de **Node.js** especificada en el proyecto.
- Si encuentras problemas, verifica que las variables de entorno en el archivo `.env` estén correctamente configuradas.
- Si el puerto 3000 está ocupado, puedes cambiar el valor de la variable `PORT` en el archivo `.env`.

---

¡Listo! Cualquier pregunta o problema, no dudes en contactar al equipo de desarrollo. 😊

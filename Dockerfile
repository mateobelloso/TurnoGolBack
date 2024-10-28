# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias en el contenedor
RUN npm install

# Copia el resto del código al contenedor
COPY . .

# Compila el código TypeScript
RUN npm run build

# Expone el puerto 3000 para la API
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "run", "start"]

# Utiliza una imagen base oficial de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias (incluyendo devDependencies para el build)
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye la aplicación (si es Next.js)
RUN npm run build

# Expone el puerto (Next.js por defecto es 3000)
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"] 
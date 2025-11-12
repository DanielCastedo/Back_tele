# Imagen base oficial de Node
FROM node:20-alpine

# Crear directorio de la app
WORKDIR /usr/src/app

# Copiar los archivos de definición
COPY package*.json ./

# Instalar dependencias
RUN npm install --omit=dev

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto definido en .env (por defecto 4000)
EXPOSE 4000

# Comando de inicio
CMD ["npm", "start"]

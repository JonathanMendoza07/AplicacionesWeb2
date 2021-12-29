#imagen de node
FROM node
#copia de ficheros locales
COPY . /var/www
#directorio de server machine
WORKDIR /var/www
#instalar dependencias
RUN npm install
#exponer puerto de ejecucion del servidor
EXPOSE 8000
#entrypoint para inicializar server desde comendao start de package json
ENTRYPOINT [ "npm", "start" ]


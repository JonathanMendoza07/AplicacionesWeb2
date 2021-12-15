### Pasos de como se realizo el complementario

En este caso el primer complementario trata de dockerizar el proyecto del primer parical

1. Definimos el archivo Dockerfile
2. Configuramos el archivo Dockerfile
2.1. Primero se define el from node
2.2. Procedemos a copiar el archivo principal del proyecto
2.3. Con workdir definimos el directorio para el archivo cpiado
2.4. RUN para instalar los diferentes modulos 
2.5. se define el puerto con EXPONSE
2.6. Se define el ENTRYPOINT que es el comando que nos dara inicio a la ejecución del proyecto
3. se genera la imagen (build) comando de docker por medio de la consola
4. Se inicia el docker con (run), comando de docker

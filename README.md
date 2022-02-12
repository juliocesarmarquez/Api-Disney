# API Disney - Alkemy

#### Detalle

Desarrollar una API para explorar el mundo de Disney, la cual permitirá conocer y modificar los
personajes que lo componen y entender en qué películas estos participaron.

#### Tecnologias utilizadas:

* Git
* NodeJS
* Express
* JWT (Json Web Token)
* Crypto
* Swagger
* Dotenv
* Mariadb / Sequelize


#### Instrucciones de instalación:

1. Crear carpeta para su instalación
2. Ingresar a la carpeta creada y desde la consola ejecutar:
    `git clone https://github.com/juliocesarmarquez/Api-Disney.git`
3. Ingresar a la carpeta /Api-Disney 
4. Ejecutar `npm install`

5. #### Configurar las variables de entorno
 - Agregar las variables de entorno locales en el archivo .env.example y cambiar su nombre por .env:   
    * PORT: Puerto utilizado para iniciar servidor.
    * DB_USERNAME: Nombre de usuario de base de datos.
    * DB_PASSWORD: Contraseña de base de datos.
    * DB_NAME: Nombre de la base de datos.
    * DB_PORT: Puerto donde funciona la base de datos
    * DB_HOST: Nombre del host de la base de datos (localhost)
    * JWT_SECRET: Clave para encriptar datos de JWT
6. Iniciar el servidor ejecutando `npm run start`
7. Ejecutar el test con el comando `npm test` 

#### Documentación con SWAGGER:
* Ingresar a la URL http://localhost:3000/api-docs/

---
*Autor: Julio Cesar Márquez*
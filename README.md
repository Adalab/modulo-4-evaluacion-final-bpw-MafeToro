# 📚 Venezuelan Authors API

Esta API permite gestionar información sobre autores venezolanos y sus libros, usando Node.js, Express y MySQL.

## 🚀 Cómo empezar

1. Clona el repositorio.
2. Instala las dependencias:

```bash
npm install

3. Crea un archivo .env con tus variables de entorno:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_clave
DB_NAME=venezuelan_authors
DB_PORT=3306
PORT=5001

4. Eejecuta el servidor:

npm run dev

*** BASE URL ***

http://localhost:5001/api

*******Endpoints disponibles*******

BASE URL: http://localhost:5001/api

🔸 Autores
GET /authors → Lista todos los autores

GET /authors/:id → Obtiene un autor por ID

POST /authors → Crea un nuevo autor

PUT /authors/:id → Actualiza un autor existente

DELETE /authors/:id → Elimina un autor

🔸 Libros
GET /books → Lista todos los libros

GET /books/:id → Obtiene un libro por ID

POST /books → Crea un nuevo libro

PUT /books/:id → Actualiza un libro

DELETE /books/:id → Elimina un libro


1.  Obtener todos los autores -- > 

GET/authors
Nos devuelve una lista de todos los autores

La respuesta es un json con la lista de todos los autores:

{
  "status": "success",
  "result": [ ... ]
}

2. Obtener un autor por ID -- > 

GET/authors/:id 

Nos devuelve los datos del autor correspondiente al ID consultado

3. Crear un nuevo autor -->

POST/authors 

Los datos para crear un nuevo autor son los siguientes:

{
  "name": "Nombre del autor",
  "birth_date": "AAAA-MM-DD",
  "biography": "Biografía breve",
  "nationality": "venezuelan"
}

Y la respuesta esperada después de cada creación es:

{
  "success": true,
  "id": 5
}

3. Actualizar un autor existente -- >

PUT/author/:id

Los datos que deben ingresarse para editar un autor existente son los siguientes:

{
  "name": "Nombre del autor",
  "birth_date": "AAAA-MM-DD",
  "biography": "Biografía breve",
  "nationality": "venezuelan",
  "id": "id-a-modificar"
}

Y la respuesta esperada después de cada modificación es:

{
  "success": true,
  "id": id-modificado
}

4. Eliminar un libro -->

DELETE/books/:id

Para eliminar un libro, solo debe indicarse el id, y la respuesta esperada es:

{
  "status": "success",
  "message": "Removed book"
}

🖼️ Frontend estático
Este proyecto incluye una pequeña interfaz web estática ubicada en la carpeta /public, que se sirve automáticamente desde Express.
Puedes acceder a ella visitando:

arduino
Copiar
Editar
http://localhost:5001
La web realiza peticiones a los endpoints de /api/authors y /api/books y muestra los datos en pantalla.

🗄️ Script de base de datos
El repositorio contiene el script SQL para crear y poblar la base de datos.
Puedes encontrarlo en el archivo:

bash
Copiar
Editar
/scripts/script_venezuelan_authorsdb.sql

Este archivo incluye la creación de tablas, relaciones y datos de ejemplo.


### Development mode
To run the project in development mode, make sure `nodemon` is installed globally:
```bash
npm install -g nodemon

Then you can start the server with:

npm run dev
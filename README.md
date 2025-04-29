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

DATABASE: db --> script_venezuelan_authorsdb

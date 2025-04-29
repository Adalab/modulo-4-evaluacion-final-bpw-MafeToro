const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const app = express();


app.use(cors());
app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname, '../public')));
require("dotenv").config();

const serverPort = process.env.PORT;
app.listen(serverPort, () => {
  console.log(`Server is running on http://localhost:${serverPort}`);
});

async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
  connection.connect();
  return connection;
}

app.get("/api/authors", async (req, res) => {
  const connection = await getDBConnection();
  const sqlQuery = "SELECT * FROM authors";
  const [authorsResult] = await connection.query(sqlQuery);
  connection.end();
  res.status(200).json({
    status: "success",
    result: [authorsResult],
  });
});

app.get("/api/authors/:id", async (req, res) => {
  const connection = await getDBConnection();
  const { id } = req.params;

  const sqlQuery = "SELECT * FROM authors WHERE id = ?";
  const [authorResult] = await connection.query(sqlQuery, [id]);
  connection.end();
  res.status(200).json({
    status: "success",
    result: authorResult,
  });
});

app.post("/api/authors", async (req, res) => {
  const connection = await getDBConnection();
  const { name, birth_date, biography, nationality } = req.body;

  if(!name || !birth_date || !biography || !nationality) {
    res.status(400).json({
        success: false,
        message: "Bad params. Please provide 'name', 'birth_date', 'biography', 'nationality'"
    })
  } else {
  const sqlQuery =
    "INSERT INTO authors (name, birth_date, biography, nationality) VALUES (?, ?, ?, ?)";
  const [result] = await connection.query(sqlQuery, [
    name,
    birth_date,
    biography,
    nationality,
  ]);
  res.status(201).json({
    success: true,
    id: result.insertId,
  });
  connection.end();    
  }
});

app.put("/api/author/:id", async (req, res) => {
  const connection = await getDBConnection();
  const { id } = req.params;
  const { name, birth_date, biography, nationality } = req.body;
  const sqlQuery =
    "UPDATE authors SET name = ?, birth_date = ?, biography = ?, nationality = ? WHERE id = ?";
  const [result] = await connection.query(sqlQuery, [
    name,
    birth_date,
    biography,
    nationality,
    id,
  ]);
  res.status(200).json({
    success: true,
    id: result.insertId,
  });
  connection.end();
});

app.delete("/api/books/:id", async (req, res) => {
  connection = await getDBConnection();
  const { id } = req.params;

  if (isNaN(id)) {
     res.status(400).json({
      success: false,
      message: "'id' must be a number.",
    });
  } else {
    const sqlQuery = "DELETE FROM books WHERE id= ?";
  const [result] = await connection.query(sqlQuery, [id]);
  connection.end();
  res.status(200).json({
    status: "success",
    message: `Removed book with id ${id}`
  });
  }
});

app.get("/api/books", async (req, res) => {
    const connection = await getDBConnection();
    const sqlQuery = "SELECT * FROM books";
    const [booksResult] = await connection.query(sqlQuery);
    connection.end();
    res.status(200).json({
      status: "success",
      result: booksResult,
    });
  });

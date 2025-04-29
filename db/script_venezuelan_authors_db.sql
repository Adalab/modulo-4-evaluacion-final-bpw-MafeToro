CREATE DATABASE Venezuelan_authors;
USE Venezuelan_authors;
CREATE TABLE authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    birth_date DATE,
    biography TEXT,
    nationality VARCHAR(50) DEFAULT 'Venezolana'
);

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    publication_year YEAR,
    genre VARCHAR(50),
    description TEXT,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE CASCADE
);

USE venezuelan_authors;

INSERT INTO authors (name, birth_date, biography)
VALUES ('Luis Fernando Álvarez', '1952-01-28', 'Luis Fernando Álvarez (Caracas, Venezuela 28 de diciembre de 1901 - 24 de octubre de 1952) fue un escritor, poeta y diplomático venezolano'),
('Hanni Ossott', '1946-02-14', 'Hanni Ossott fue una poeta, traductora y ensayista nacida en Caracas en 1946. Profesora de la Escuela de Letras de la Universidad Central de Venezuela'),
('María Fernanda Palacios', '1945-10-26', 'Ensayista, poeta, traductora y crítico literario. Nació en Caracas el 26 de octubre de 1945, en el seno de una familia de artistas.');

INSERT INTO books (title, publication_year, genre, description, author_id)
VALUES ('Espacios para decir lo mismo', 1974, 'Poesía', 'Primer libro de poesía de Hanni Ossott.', 2),
('Espacios en disolución', 1976, 'Poesía', 'Segundo poemario que profundiza en el lenguaje introspectivo.', 2),
('Formas en el sueño figuran infinitos', 1976, 'Poesía', 'Exploración poética del subconsciente.', 2);

INSERT INTO books (title, publication_year, genre, description, author_id)
VALUES
('Va y ven', 1936, 'Poesía', 'Primer poemario de Luis Fernando Álvarez, publicado por la Cooperativa de Arte Gráficas.', 1),
('Soledad contigo', 1940, 'Poesía', 'Obra que refleja la temática de la soledad en la poesía de Álvarez.', 1),
('Vísperas de la muerte', 1940, 'Poesía', 'Poemario que explora la obsesión del autor con la muerte y la angustia existencial.', 1);


INSERT INTO books (title, publication_year, genre, description, author_id)
VALUES
('Por alto/por bajo', 1974, 'Poesía', 'Primer libro de poesía de María Fernanda Palacios, explorando temas de introspección y lenguaje.', 3),
('Sabor y saber de la lengua', 1987, 'Ensayo', 'Compendio de ensayos sobre la lengua y la literatura, analizando obras de autores como Octavio Paz y Franz Kafka.', 3),
('Y todo será cuento un día', 2011, 'Ensayo', 'Reflexiones sobre la narrativa y la memoria en la literatura contemporánea.', 3);
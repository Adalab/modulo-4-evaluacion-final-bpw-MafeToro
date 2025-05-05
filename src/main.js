async function fetchAuthors() {
    const res = await fetch('/api/authors');
    const data = await res.json();
    const authorsSection = document.getElementById('authors');
    
    
    const authorsHtml = data.result.map(author => `
      <div class="author">
        <h3>${author.name}</h3>
        <p><strong>Nacionalidad:</strong> ${author.nationality}</p>
        <p><strong>Biografía:</strong> ${author.biography}</p>
        <p><strong>Fecha de nacimiento:</strong> ${author.birth_date}</p>
        ${author.image_url ? `<img src="${author.image_url}" alt="Foto de ${author.name}" style="max-width: 200px; border-radius: 4px;" />` : ''}
      </div>
    `).join('');
    
    authorsSection.innerHTML = authorsHtml;
  }

  async function fetchBooks() {
    const res = await fetch('/api/books');
    const data = await res.json();
    const booksSection = document.getElementById('books');
    
    
    const booksHtml = data.result.map(book => `
      <div class="book">
        <h4>${book.title}</h4>
        <p><strong>Año:</strong> ${book.publication_year}</p>
        <p><strong>Autor:</strong> ${book.author_name}</p>
      </div>
    `).join('');
    
    booksSection.innerHTML = booksHtml;
  }

  fetchAuthors();
  fetchBooks();
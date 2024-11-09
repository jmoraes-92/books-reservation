// src/app/services/livro.service.ts
import { Injectable } from '@angular/core';
import { Livro } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private livros: Livro[] = [
    { id: 1, titulo: '1984', autor: 'George Orwell', genero: 'Distopia', isbn: 1234567890, ano: 1949, disponivel: true },
    { id: 2, titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', genero: 'Fantasia', isbn: 9876543210, ano: 1937, disponivel: false }
  ];

  getLivros(): Livro[] {
    return this.livros;
  }

  addLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  editLivro(id: number, livroAtualizado: Livro): void {
    const index = this.livros.findIndex(livro => livro.id === id);
    if (index !== -1) {
      this.livros[index] = livroAtualizado;
    }
  }

  deleteLivro(id: number): void {
    this.livros = this.livros.filter(livro => livro.id !== id);
  }

  toggleDisponibilidade(id: number): void {
    const livro = this.livros.find(l => l.id === id);
    if (livro) {
      livro.disponivel = !livro.disponivel;
    }
  }
}

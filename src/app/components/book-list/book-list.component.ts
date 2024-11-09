// src/app/components/book-list/book-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Livro } from '../../models/book.model';
import { LivroService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  livros: Livro[] = [];

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.livros = this.livroService.getLivros();
  }

  toggleDisponibilidade(id: number): void {
    this.livroService.toggleDisponibilidade(id);
    this.livros = this.livroService.getLivros();
  }

  deleteLivro(id: number): void {
    this.livroService.deleteLivro(id);
    this.livros = this.livroService.getLivros();
  }
}

// src/app/components/book-form/book-form.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Livro } from '../../models/book.model';
import { LivroService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  livro: Livro = { id: 0, titulo: '', autor: '', genero: '', isbn: 0, ano: 0, disponivel: true };
  editMode: boolean = false;

  constructor(public router: Router, private route: ActivatedRoute, private livroService: LivroService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      const livroExistente = this.livroService.getLivros().find(l => l.id === Number(id));
      if (livroExistente) {
        this.livro = { ...livroExistente };
      }
    }
  }

  saveLivro(): void {
    if (this.editMode) {
      this.livroService.editLivro(this.livro.id, this.livro);
    } else {
      this.livro.id = this.livroService.getLivros().length + 1;
      this.livroService.addLivro(this.livro);
    }
    this.router.navigate(['/']);
  }
}

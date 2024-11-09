// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'livro/new', component: BookFormComponent },
  { path: 'livro/edit/:id', component: BookFormComponent },
  { path: 'livro/new', component: BookFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

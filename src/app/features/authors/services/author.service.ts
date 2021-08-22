import { Injectable } from '@angular/core';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  authorsList: Array<Author> = [
    {
      id: 1,
      name: 'Francisco Silva',
      birthday: new Date('1988-10-11'),
      salary: 4500,
      themes: ['Cultura']
    },
    {
      id: 2,
      name: 'Tiago Junior',
      birthday: new Date('1992-12-26'),
      salary: 4000,
      themes: ['Politica']
    },
    {
      id: 3,
      name: 'Aline Gomes',
      birthday: new Date('1985-08-13'),
      salary: 4200,
      themes: ['Esportes']
    },
    {
      id: 4,
      name: 'Alexandro Neto',
      birthday: new Date('1975-05-24'),
      salary: 5000,
      themes: ['Economia']
    },
  ]

  constructor() { }

  getAuthors() {
    return this.authorsList;
  }

  getAuthorById(id: number) {
    return this.authorsList.find((author) => author.id === Number(id));
  }

  getAuthorIdByName(name: string)
  {
    const author = this.authorsList.find((author) => author.name === name)
    if(author)
      return author.id
    else
      return 1
  }
}

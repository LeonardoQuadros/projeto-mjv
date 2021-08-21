import { Injectable } from '@angular/core';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  authorList: Array<Author> = []

  constructor() { }

  getAUthors() {
    return this.authorList;
  }

  getAuthorById(id: number) {
    return this.authorList.find((author) => author.id === Number(id));
  }
}

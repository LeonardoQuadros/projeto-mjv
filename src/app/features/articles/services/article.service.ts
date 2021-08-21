import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleList: Array<Article> = [
    {
      id: 1,
      title: 'Titulo aleatorio',
      author: 'Francisco Silva',
      theme:'culture',
      content: 'Conteudo aleatorio'
    },
    {
      id: 2,
      title: 'Titulo aleatorio',
      author: 'Tiago Junior',
      theme:'politics',
      content: 'Conteudo aleatorio'
    },
    {
      id: 3,
      title: 'Titulo aleatorio',
      author: 'Aline Gomes',
      theme:'sports',
      content: 'Conteudo aleatorio'
    },
    {
      id: 4,
      title: 'Titulo aleatorio',
      author: 'Alexandro Neto',
      theme:'economy',
      content: 'Conteudo aleatorio'
    }
  ]

  constructor() { }

  getArticles() {
    return this.articleList;
  }
  
  getArticleById(id: number) {
    return this.articleList.find((article) => article.id === Number(id));
  }

  getArticlesByAuthor(author: string) {
    return this.articleList.filter((article) => article.author === author);
  }

  getArticlesByTheme(theme: string) {
    return this.articleList.filter((article) => article.theme === theme);
  }
}

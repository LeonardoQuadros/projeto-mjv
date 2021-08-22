import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleList: Array<Article> = [
    {
      id: 1,
      title: 'Artigo 1',
      author: 'Francisco Silva',
      date: new Date('2021-08-18'),
      theme:'cultura',
      content: 'Conteudo aleatorio'
    },
    {
      id: 2,
      title: 'Artigo 2',
      date: new Date('2021-08-19'),
      author: 'Tiago Junior',
      theme:'politica',
      content: 'Conteudo aleatorio'
    },
    {
      id: 3,
      title: 'Artigo 3',
      date: new Date('2021-08-20'),
      author: 'Aline Gomes',
      theme:'esportes',
      content: 'Conteudo aleatorio'
    },
    {
      id: 4,
      title: 'Artigo 4',
      date: new Date('2021-08-21'),
      author: 'Alexandro Neto',
      theme:'economia',
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

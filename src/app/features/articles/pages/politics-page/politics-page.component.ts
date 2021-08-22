import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  templateUrl: './politics-page.component.html',
  styleUrls: ['./politics-page.component.scss']
})
export class PoliticsPageComponent implements OnInit {

  articlesList: Array<Article> = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articlesList = this.articleService.getArticlesByTheme('politica')
  }

}

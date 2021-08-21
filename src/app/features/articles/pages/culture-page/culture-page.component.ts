import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';


@Component({
  templateUrl: './culture-page.component.html',
  styleUrls: ['./culture-page.component.scss']
})
export class CulturePageComponent implements OnInit {

  articlesList: Array<Article> = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articlesList = this.articleService.getArticlesByTheme('culture')
  }

}

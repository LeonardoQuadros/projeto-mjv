import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  templateUrl: './economy-page.component.html',
  styleUrls: ['./economy-page.component.scss']
})
export class EconomyPageComponent implements OnInit {

  articlesList: Array<Article> = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articlesList = this.articleService.getArticlesByTheme('economia')
  }

}

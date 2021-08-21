import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  templateUrl: './article-details-page.component.html',
  styleUrls: ['./article-details-page.component.scss']
})
export class ArticleDetailsPageComponent implements OnInit {

  article?: Article;

  constructor(
    private activedRoute: ActivatedRoute,
    private articleService: ArticleService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.article = this.articleService.getArticleById(params.id);
    })
  }

}

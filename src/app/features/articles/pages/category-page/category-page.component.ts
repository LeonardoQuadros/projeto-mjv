import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  articlesList: Array<Article> = []

  constructor(
    private activedRoute: ActivatedRoute,
    private articleService: ArticleService) { }


  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.articlesList = this.articleService.getArticlesByTheme(params.theme);
    })
  }

}

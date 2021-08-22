import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/features/articles/models/article.model';
import { ArticleService } from 'src/app/features/articles/services/article.service';
import { Author } from '../../models/author.model';
import { AuthorService } from '../../services/author.service';

@Component({
  templateUrl: './author-details-page.component.html',
  styleUrls: ['./author-details-page.component.scss']
})
export class AuthorDetailsPageComponent implements OnInit {

  author?: Author;

  articlesList?: Array<Article>;

  constructor(
    private activedRoute: ActivatedRoute,
    private authorService: AuthorService,
    private articleService: ArticleService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.author = this.authorService.getAuthorById(params.id);
    });
    if(this.author)
    this.articlesList = this.articleService.getArticlesByAuthor(this.author.name)
  }

}

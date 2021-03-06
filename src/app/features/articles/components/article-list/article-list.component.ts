import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  @Input()
  articlesList?: Array<Article>;

  constructor() { }

  ngOnInit(): void {
  }

}

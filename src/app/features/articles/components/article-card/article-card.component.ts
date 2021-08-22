import { Component, OnInit, Input } from '@angular/core';
import { AuthorService } from 'src/app/features/authors/services/author.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  @Input()
  article?: Article;

  @Input()
  card: boolean = true;

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    
  }

  findAuthorId(name: string)
  {
    return this.authorService.getAuthorIdByName(name);
  }

}

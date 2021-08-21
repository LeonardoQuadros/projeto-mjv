import { Component, OnInit } from '@angular/core';
import { Author } from '../../models/author.model';
import { AuthorService } from '../../services/author.service';

@Component({
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.scss']
})
export class AuthorPageComponent implements OnInit {

  authorsList: Array<Author> = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.authorsList = this.authorService.getAUthors();
  }

}

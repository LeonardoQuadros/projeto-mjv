import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../../models/author.model';
import { AuthorService } from '../../services/author.service';

@Component({
  templateUrl: './author-details-page.component.html',
  styleUrls: ['./author-details-page.component.scss']
})
export class AuthorDetailsPageComponent implements OnInit {

  article?: Author;

  constructor(
    private activedRoute: ActivatedRoute,
    private authorService: AuthorService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.article = this.authorService.getAuthorById(params.id);
    })
  }

}

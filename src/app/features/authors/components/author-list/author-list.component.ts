import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../../models/author.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  @Input()
  authorsList?: Array<Author>;

  constructor() { }

  ngOnInit(): void {
  }

}

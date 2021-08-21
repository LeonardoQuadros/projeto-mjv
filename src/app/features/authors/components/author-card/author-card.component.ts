import { Component, OnInit, Input} from '@angular/core';
import { Author } from '../../models/author.model';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.scss']
})
export class AuthorCardComponent implements OnInit {

  @Input()
  author?: Author

  @Input()
  card: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}

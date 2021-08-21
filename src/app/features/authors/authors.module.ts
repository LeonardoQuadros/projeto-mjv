import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthorPageComponent } from './pages/author-page/author-page.component';
import { AuthorCardComponent } from './components/author-card/author-card.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorDetailsPageComponent } from './pages/author-details-page/author-details-page.component';



@NgModule({
  declarations: [
    AuthorPageComponent,
    AuthorCardComponent,
    AuthorListComponent,
    AuthorDetailsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AuthorsModule { }

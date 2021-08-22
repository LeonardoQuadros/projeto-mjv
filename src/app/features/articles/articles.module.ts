import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ArticleDetailsPageComponent } from './pages/article-details-page/article-details-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';



@NgModule({
  declarations: [
    ArticleCardComponent, 
    ArticleListComponent, 
    MainPageComponent, 
    ArticleDetailsPageComponent,
    CategoryPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [ArticleCardComponent]
})
export class ArticlesModule { }

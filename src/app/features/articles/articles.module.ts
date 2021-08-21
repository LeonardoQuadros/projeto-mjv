import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SportsPageComponent } from './pages/sports-page/sports-page.component';
import { CulturePageComponent } from './pages/culture-page/culture-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { PoliticsPageComponent } from './pages/politics-page/politics-page.component';
import { EconomyPageComponent } from './pages/economy-page/economy-page.component';
import { ArticleDetailsPageComponent } from './pages/article-details-page/article-details-page.component';



@NgModule({
  declarations: [
    ArticleCardComponent, 
    ArticleListComponent, 
    MainPageComponent, 
    SportsPageComponent, 
    CulturePageComponent, 
    PoliticsPageComponent,
    EconomyPageComponent,
    ArticleDetailsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class ArticlesModule { }

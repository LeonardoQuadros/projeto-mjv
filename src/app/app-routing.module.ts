import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsPageComponent } from './features/articles/pages/article-details-page/article-details-page.component';
import { CulturePageComponent } from './features/articles/pages/culture-page/culture-page.component';
import { EconomyPageComponent } from './features/articles/pages/economy-page/economy-page.component';
import { MainPageComponent } from './features/articles/pages/main-page/main-page.component';
import { PoliticsPageComponent } from './features/articles/pages/politics-page/politics-page.component';
import { SportsPageComponent } from './features/articles/pages/sports-page/sports-page.component';
import { AuthorDetailsPageComponent } from './features/authors/pages/author-details-page/author-details-page.component';
import { AuthorPageComponent } from './features/authors/pages/author-page/author-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: MainPageComponent},
  { path: 'sports', component: SportsPageComponent},
  { path: 'culture', component: CulturePageComponent},
  { path: 'economy', component: EconomyPageComponent},
  { path: 'politics', component: PoliticsPageComponent},
  { path: 'articledetails/:id', component: ArticleDetailsPageComponent},
  { path: 'authors', component: AuthorPageComponent},
  { path: 'authordetails/:id', component: AuthorDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsPageComponent } from './features/articles/pages/article-details-page/article-details-page.component';
import { CategoryPageComponent } from './features/articles/pages/category-page/category-page.component';
import { MainPageComponent } from './features/articles/pages/main-page/main-page.component';
import { AuthorDetailsPageComponent } from './features/authors/pages/author-details-page/author-details-page.component';
import { AuthorPageComponent } from './features/authors/pages/author-page/author-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: MainPageComponent},
  { path: 'autores', component: AuthorPageComponent},
  { path: ':theme', component: CategoryPageComponent},
  { path: 'detalhesartigos/:id', component: ArticleDetailsPageComponent},
  { path: 'detalhesautores/:id', component: AuthorDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

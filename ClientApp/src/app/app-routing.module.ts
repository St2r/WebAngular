import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FetchDataComponent} from './pages/fetch-data/fetch-data.component';
import {HomeComponent} from './pages/home/home.component';
import {EditPassageComponent} from './pages/edit-passage/edit-passage.component';
import {ViewArticleComponent} from './pages/view-article/view-article.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/welcome'},
  {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)},
  {path: 'fetch-data', component: FetchDataComponent},
  {path: 'counter', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'edit-passage', component: EditPassageComponent},
  {path: 'view-article/:articleId', component: ViewArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

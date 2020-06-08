import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {EditArticleComponent} from './pages/edit-article/edit-article.component';
import {ViewArticleComponent} from './pages/view-article/view-article.component';
import {SpaceComponent} from './pages/space/space.component';
import {FansComponent} from './pages/space/fans/fans.component';
import {FansFansComponent} from './pages/space/fans/fans-fans/fans-fans.component';
import {FansFollowsComponent} from './pages/space/fans/fans-follows/fans-follows.component';
import {FallbackComponent} from './pages/fallback/fallback.component';
import {PersonPageComponent} from './pages/space/person-page/person-page.component';
import {ExerciseComponent} from './pages/exercise/exercise.component';
import {ForumComponent} from './pages/forum/forum.component';
import {DoExerciseComponent} from './pages/do-exercise/do-exercise.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {MyspaceComponent} from './pages/myspace/myspace.component';
import { SearchComponent } from './pages/search/search.component';
import {TestImageComponent} from './pages/test-image/test-image.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'exercise', component: ExerciseComponent},
  {path: 'do-exercise', component: DoExerciseComponent},
  {path: 'forum/:block', component: ForumComponent},
  {path: 'edit-article/:articleId', component: EditArticleComponent},
  {path: 'view-article/:articleId', component: ViewArticleComponent},
  {
    path: 'space/:userId', component: SpaceComponent, children: [
      {path: '', component: PersonPageComponent},
      {
        path: 'fans', component: FansComponent, children: [
          {path: 'fans', component: FansFansComponent},
          {path: 'follows', component: FansFollowsComponent}
        ]
      }
    ]
  },
  {path: 'my-space', component: MyspaceComponent},
  {path: 'search', component: SearchComponent},
  {path: 'image', component: TestImageComponent},
  {path: '404', component: FallbackComponent},
  {path: '**', pathMatch: 'full', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

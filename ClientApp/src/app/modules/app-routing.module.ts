import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from '../pages/home/home.component';
import {FallbackComponent} from '../pages/fallback/fallback.component';
import {ExerciseComponent} from '../pages/exercise/exercise.component';
import {ForumComponent} from '../pages/forum/forum.component';
import {DoExerciseComponent} from '../pages/do-exercise/do-exercise.component';
import {LoginComponent} from '../pages/login/login.component';
import {RegisterComponent} from '../pages/register/register.component';
import {MyspaceComponent} from '../pages/myspace/myspace.component';
import { SearchComponent } from '../pages/search/search.component';
import {TestImageComponent} from '../pages/test-image/test-image.component';
import { EdituserinfoComponent } from '../pages/edituserinfo/edituserinfo.component';
import {ArticleComponent} from '../pages/article/article.component';
import {ResourceComponent} from '../pages/resource/resource.component';
import { AdminManageComponent } from '../pages/admin-manage/admin-manage.component';
import { ResultComponent } from '../pages/result/result.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'exercise', component: ExerciseComponent},
  {path: 'do-exercise', component: DoExerciseComponent},
  {path: 'forum/:block', component: ForumComponent},
  {path: 'resource', component: ResourceComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'my-space/:target', component: MyspaceComponent},
  {path: 'editinfo', component: EdituserinfoComponent},
  {path: 'admin-manage', component: AdminManageComponent},
  {path: 'search', component: SearchComponent},
  {path: 'result', component: ResultComponent},
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

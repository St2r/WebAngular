import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {CounterComponent} from './counter/counter.component';
import {FetchDataComponent} from './pages/fetch-data/fetch-data.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './modules/icons-provider.module';
import {AntDesignModule} from './modules/ant-design.module';
import {
  NzAvatarModule, NzBackTopModule, NzBadgeModule,
  NzBreadCrumbModule, NzCardModule, NzCheckboxModule, NzCommentModule, NzDescriptionsModule,
  NzDividerModule, NzFormModule,
  NzGridModule,
  NzInputModule,
  NzPageHeaderModule, NzPaginationModule, NzPopoverModule, NzProgressModule, NzRateModule, NzResultModule, NzSkeletonModule,
  NzToolTipModule,
  NzTypographyModule,
} from 'ng-zorro-antd';

import {NzListModule} from 'ng-zorro-antd/list';


import {EditorModule} from '@tinymce/tinymce-angular';
import { EditArticleComponent } from './pages/edit-article/edit-article.component';
import { ViewArticleComponent } from './pages/view-article/view-article.component';
import { CommentComponent } from './components/comment/comment.component';
import { SpaceComponent } from './pages/space/space.component';
import { FansComponent } from './pages/space/fans/fans.component';
import { FansFansComponent } from './pages/space/fans/fans-fans/fans-fans.component';
import { FansFollowsComponent } from './pages/space/fans/fans-follows/fans-follows.component';
import { FallbackComponent } from './pages/fallback/fallback.component';
import { PersonPageComponent } from './pages/space/person-page/person-page.component';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { ForumComponent } from './pages/forum/forum.component';
import { SchoolComponent } from './pages/school/school.component';
import { QuestionComponent } from './components/question/question.component';
import { DoExerciseComponent } from './pages/do-exercise/do-exercise.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { LoginBarComponent } from './components/login-bar/login-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EditArticleComponent,
    ViewArticleComponent,
    CommentComponent,
    EditArticleComponent,
    SpaceComponent,
    FansComponent,
    FansFansComponent,
    FansFollowsComponent,
    FallbackComponent,
    PersonPageComponent,
    ExerciseComponent,
    ForumComponent,
    SchoolComponent,
    QuestionComponent,
    DoExerciseComponent,
    LoginBarComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'counter', component: CounterComponent},
    ]),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    AntDesignModule,
    NzToolTipModule,
    NzTypographyModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzPageHeaderModule,
    NzInputModule,
    EditorModule,
    NzDividerModule,
    NzFormModule,
    ReactiveFormsModule,
    NzRateModule,
    NzAvatarModule,
    NzPopoverModule,
    NzListModule,
    NzCommentModule,
    NzDescriptionsModule,
    NzBadgeModule,
    NzResultModule,
    NzSkeletonModule,
    NzCardModule,
    NzProgressModule,
    NzPaginationModule,
    NzBackTopModule,
    ScrollingModule,
    NzCheckboxModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

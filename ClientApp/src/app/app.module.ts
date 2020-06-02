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
  NzAvatarModule, NzBadgeModule,
  NzBreadCrumbModule, NzCommentModule, NzDescriptionsModule,
  NzDividerModule, NzFormModule,
  NzGridModule,
  NzInputModule, NzListModule,
  NzPageHeaderModule, NzPopoverModule, NzRateModule,
  NzToolTipModule,
  NzTypographyModule
} from 'ng-zorro-antd';

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
    ExerciseComponent
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
    NzBadgeModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

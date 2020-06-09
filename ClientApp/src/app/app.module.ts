import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './modules/icons-provider.module';
import {AntDesignModule} from './modules/ant-design.module';
import {
  NzAvatarModule,
  NzBackTopModule,
  NzBadgeModule,
  NzBreadCrumbModule,
  NzCardModule,
  NzCheckboxModule,
  NzCommentModule,
  NzDescriptionsModule,
  NzDividerModule,
  NzFormModule,
  NzGridModule,
  NzInputModule,
  NzModalModule,
  NzPageHeaderModule,
  NzPaginationModule,
  NzPopoverModule,
  NzProgressModule,
  NzRadioModule,
  NzRateModule,
  NzResultModule,
  NzSelectModule,
  NzSkeletonModule,
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
import { QuestionComponent } from './components/question/question.component';
import { DoExerciseComponent } from './pages/do-exercise/do-exercise.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { LoginBarComponent } from './components/login-bar/login-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BreadBarComponent } from './components/bread-bar/bread-bar.component';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { MyspaceComponent } from './pages/myspace/myspace.component';
import { SideUserComponent } from './pages/myspace/side-user/side-user.component';
import { TabPostComponent } from './pages/myspace/tab-post/tab-post.component';
import { TabInvitationComponent } from './pages/myspace/tab-invitation/tab-invitation.component';
import { TabStarComponent } from './pages/myspace/tab-star/tab-star.component';
import { TabAttachmentComponent } from './pages/myspace/tab-attachment/tab-attachment.component';
import { TabFollowComponent } from './pages/myspace/tab-follow/tab-follow.component';
import { SearchComponent } from './pages/search/search.component';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { TestImageComponent } from './pages/test-image/test-image.component';
import { UserHoverComponent } from './components/user-hover/user-hover.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { IFollowComponent } from './pages/myspace/tab-follow/i-follow/i-follow.component';
import { FollowMeComponent } from './pages/myspace/tab-follow/follow-me/follow-me.component';
import { FollowBlockComponent } from './pages/myspace/tab-follow/follow-block/follow-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    QuestionComponent,
    DoExerciseComponent,
    LoginBarComponent,
    LoginComponent,
    RegisterComponent,
    BreadBarComponent,
    MyspaceComponent,
    SideUserComponent,
    TabPostComponent,
    TabInvitationComponent,
    TabStarComponent,
    TabAttachmentComponent,
    TabFollowComponent,
    SearchComponent,
    TestImageComponent,
    UserHoverComponent,
    ArticleItemComponent,
    IFollowComponent,
    FollowMeComponent,
    FollowBlockComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
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
    NzCheckboxModule,
    NzModalModule,
    NzSelectModule,
    NzRadioModule,
    NzCarouselModule,
    NzTabsModule,
    NzAutocompleteModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

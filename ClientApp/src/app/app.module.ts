import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './modules/app-routing.module';
import {IconsProviderModule} from './modules/icons-provider.module';
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
  NzGridModule, NzIconModule,
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
  NzTypographyModule, NzUploadModule,
} from 'ng-zorro-antd';

import {NzListModule} from 'ng-zorro-antd/list';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';


import {EditorModule, TINYMCE_SCRIPT_SRC} from '@tinymce/tinymce-angular';
import {EditArticleComponent} from './pages/edit-article/edit-article.component';
import {ViewArticleComponent} from './pages/view-article/view-article.component';
import {CommentComponent} from './components/comment/comment.component';
import {FallbackComponent} from './pages/fallback/fallback.component';
import {ExerciseComponent} from './pages/exercise/exercise.component';
import {ForumComponent} from './pages/forum/forum.component';
import {QuestionComponent} from './components/question/question.component';
import {DoExerciseComponent} from './pages/do-exercise/do-exercise.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {LoginBarComponent} from './components/login-bar/login-bar.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {BreadBarComponent} from './components/bread-bar/bread-bar.component';

import {NzCarouselModule} from 'ng-zorro-antd/carousel';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {MyspaceComponent} from './pages/myspace/myspace.component';
import {SideUserComponent} from './pages/myspace/side-user/side-user.component';
import {TabPostComponent} from './pages/myspace/tab-post/tab-post.component';
import {TabInvitationComponent} from './pages/myspace/tab-invitation/tab-invitation.component';
import {TabStarComponent} from './pages/myspace/tab-star/tab-star.component';
import {TabAttachmentComponent} from './pages/myspace/tab-attachment/tab-attachment.component';
import {TabFollowComponent} from './pages/myspace/tab-follow/tab-follow.component';
import {SearchComponent} from './pages/search/search.component';

import {NzAutocompleteModule} from 'ng-zorro-antd/auto-complete';
import {TestImageComponent} from './pages/test-image/test-image.component';
import {UserHoverComponent} from './components/user-hover/user-hover.component';
import {ArticleItemComponent} from './components/article-item/article-item.component';
import {IFollowComponent} from './pages/myspace/tab-follow/i-follow/i-follow.component';
import {FollowMeComponent} from './pages/myspace/tab-follow/follow-me/follow-me.component';
import {FollowBlockComponent} from './pages/myspace/tab-follow/follow-block/follow-block.component';
import {EdituserinfoComponent} from './pages/edituserinfo/edituserinfo.component';
import {AvatarEditorComponent} from './components/avatar-editor/avatar-editor.component';
import {EditbasicinfoComponent} from './pages/edituserinfo/editbasicinfo/editbasicinfo.component';
import {EditpwdComponent} from './pages/edituserinfo/editpwd/editpwd.component';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { EditAvatarComponent } from './pages/edituserinfo/edit-avatar/edit-avatar.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticleViewComponent } from './pages/article/article-view/article-view.component';
import { ArticleNewComponent } from './pages/article/article-new/article-new.component';
import { BackTopComponent } from './components/back-top/back-top.component';
import { ResourceComponent } from './pages/resource/resource.component';
import { AdminManageComponent } from './pages/admin-manage/admin-manage.component';
import { ArticleManageComponent } from './pages/admin-manage/article-manage/article-manage.component';
import { UserManageComponent } from './pages/admin-manage/user-manage/user-manage.component';
import { AttechmentManageComponent } from './pages/admin-manage/attechment-manage/attechment-manage.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd';
import { NzFilterTriggerComponent } from './pages/admin-manage/Addon/filter-trigger.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditArticleComponent,
    ViewArticleComponent,
    CommentComponent,
    EditArticleComponent,
    FallbackComponent,
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
    EdituserinfoComponent,
    EditbasicinfoComponent,
    EditpwdComponent,
    AvatarEditorComponent,
    SafeHtmlPipe,
    EditAvatarComponent,
    ArticleComponent,
    ArticleViewComponent,
    ArticleNewComponent,
    BackTopComponent,
    ResourceComponent,
    AdminManageComponent,
    ArticleManageComponent,
    UserManageComponent,
    AttechmentManageComponent,
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
    NzAutocompleteModule,
    NzUploadModule,
    NzDatePickerModule,
    NzTableModule,
    NzDropDownModule,
    NzFilterTriggerComponent,
  ],
  exports: [],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

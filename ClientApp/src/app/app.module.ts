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
  NzAvatarModule,
  NzBreadCrumbModule,
  NzDividerModule, NzFormModule,
  NzGridModule,
  NzInputModule, NzListModule,
  NzPageHeaderModule, NzPopoverModule, NzRateModule,
  NzToolTipModule,
  NzTypographyModule
} from 'ng-zorro-antd';

import {EditorModule} from '@tinymce/tinymce-angular';
import { EditPassageComponent } from './pages/edit-passage/edit-passage.component';
import { ViewArticleComponent } from './pages/view-article/view-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EditPassageComponent,
    ViewArticleComponent
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
    NzListModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

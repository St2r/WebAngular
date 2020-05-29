import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzButtonModule, NzIconModule, NzLayoutModule, NzMenuModule} from 'ng-zorro-antd';
import {IconsProviderModule} from './icons-provider.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzMenuModule,
    NzIconModule,
    NzLayoutModule,
    NzButtonModule
  ],
  exports: [
    NzMenuModule,
    NzIconModule,
    NzLayoutModule,
    NzButtonModule
  ]
})
export class AntDesignModule {
}

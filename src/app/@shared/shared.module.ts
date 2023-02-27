import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SERVICES } from './services';
import { SharedDataService } from './services/shared-data.service';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
  ],
  providers: [
    SERVICES
  ],
  exports:[
    FlexLayoutModule,
    TranslateModule,

  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [SharedDataService],
    };
  }
}

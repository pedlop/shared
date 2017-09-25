import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastService } from './toast.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  entryComponents: []
})
export class ToastModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ToastModule,
      providers: [ToastService]
    };
  }
}

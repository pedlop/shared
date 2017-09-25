// import { ToastService } from './src/app/shared/toast/toast.service';
import { ToastModule } from './src/app/toast/toast.module';
import { HeaderModule } from './src/app/header/header.module';
import { FooterModule } from './src/app/footer/footer.module';
import { ModuleWithProviders, NgModule } from '@angular/core';

export {
    ToastModule,
    ToastService
} from './src/app/toast';

export {
    HeaderComponent,
    HeaderModule
} from './src/app/header';

export {
    FooterComponent,
    FooterModule
} from './src/app/footer';

const MODULES = [
    ToastModule,
    HeaderModule,
    FooterModule
  ];
  
@NgModule({
    imports: [
        ToastModule.forRoot(),
        HeaderModule,
        FooterModule
    ],
    exports: MODULES
})
export class SharedRootModule {}
  
@NgModule({ exports: MODULES })
export class PortalSharedModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: SharedRootModule };
    }
}

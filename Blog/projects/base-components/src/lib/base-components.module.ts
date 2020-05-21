import { NgModule } from '@angular/core';
import { BaseComponentsComponent } from './base-components.component';
import { BaseButtonComponent } from './base-button/base-button.component';



@NgModule({
  declarations: [BaseComponentsComponent, BaseButtonComponent],
  imports: [
  ],
  exports: [BaseComponentsComponent, BaseButtonComponent]
})
export class BaseComponentsModule { }

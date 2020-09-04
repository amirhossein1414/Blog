import { NgModule } from '@angular/core';
import { InputComponent } from './app-input/app-input.component';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InputComponent],
  imports: [AngularMaterialModule,
    FormsModule,
    CommonModule
  ],
  exports: [InputComponent]
})
export class BaseComponentsModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './forms/main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './base-components/angular-material.module';
import { BaseComponentsModule } from './base-components/base-components.module';
import { AuthModule } from './forms/main-menu/auth/auth.module';
import { RoutingModule } from './routing/routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MainMenuComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    BaseComponentsModule,
    AuthModule,
    RoutingModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SpaceComponent } from './space/space.component';

@NgModule({
  declarations: [
    MainMenuComponent,
    AppComponent,
    SpaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  entryComponents: [MainMenuComponent],
  bootstrap: [MainMenuComponent]
})
export class AppModule { }

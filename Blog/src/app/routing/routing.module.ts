import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from '../forms/main-menu/auth/log-in/log-in.component';
import { RegisterComponent } from '../forms/main-menu/auth/register/register.component';

const routes: Routes = [
  /* { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent } */
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

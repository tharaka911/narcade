import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import {LogingComponent} from "./components/loging/loging.component";
import {SignupComponent} from "./components/signup/signup.component";

const routes: Routes = [{ path: '', component: SecurityComponent,children:
    [
      {path:'',redirectTo:'/security/login',pathMatch:"full"},
    {path:'login',component:LogingComponent},
    {path:'signup',component:SignupComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }

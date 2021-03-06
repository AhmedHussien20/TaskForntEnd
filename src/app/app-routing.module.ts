import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"login",
    component:LoginComponent


  },
  {
    path:"register",
    component:RegisterComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

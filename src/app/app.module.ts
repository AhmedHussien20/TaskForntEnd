import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { LoginComponent } from './Authentication/login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { UserLoginService } from './Services/UserLoginService';
import { HttpClientModule } from '@angular/common/http';

 
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule, 
    InputTextModule,
    AppRoutingModule,CardModule,ButtonModule,CheckboxModule,
    RadioButtonModule,DropdownModule,InputTextareaModule,
    FormsModule,
    HttpClientModule
 
  ],
  providers: [UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

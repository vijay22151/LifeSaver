import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
=======
import { RegisterComponent } from './register/register.component';
>>>>>>> 6fa7a71c9b0b7d63020245b539da6f7a606141b4

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    DashboardComponent
=======
    RegisterComponent
>>>>>>> 6fa7a71c9b0b7d63020245b539da6f7a606141b4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { DirectivesComponent } from './directives/directives.component';
import { ResistrationFormComponent } from './resistration-form/resistration-form.component';
import { TimeComponent } from './time/time.component';
import { CartComponent } from './cart/cart.component';
import { GradeCalculatorComponent } from './grade-calculator/grade-calculator.component';
import { CarsComponent } from './cars/cars.component';
import { PhonesComponent } from './phones/phones.component';
import { UsersComponent } from './users/users.component';
import{HttpClientModule} from '@angular/common/http';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { MemesComponent } from './memes/memes.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MailsComponent } from './mails/mails.component';
import { BoredomsComponent } from './boredoms/boredoms.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    CalculatorComponent,
    DataBindingComponent,
    RectangleComponent,
    DirectivesComponent,
    ResistrationFormComponent,
    TimeComponent,
    CartComponent,
    GradeCalculatorComponent,
    CarsComponent,
    PhonesComponent,
    UsersComponent,
    VehiclesComponent,
    MemesComponent,
    FlipkartComponent,
    AccountsComponent,
    MailsComponent,
    BoredomsComponent,
    CreateUserComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AuthenticationGuard } from './authentication.guard';
import { BoredomsComponent } from './boredoms/boredoms.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GradeCalculatorComponent } from './grade-calculator/grade-calculator.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MailsComponent } from './mails/mails.component';
import { MemesComponent } from './memes/memes.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PhonesComponent } from './phones/phones.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { ResistrationFormComponent } from './resistration-form/resistration-form.component';
import { TimeComponent } from './time/time.component';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",canActivate:[AuthenticationGuard], component: DashboardComponent, children: [
      { path: "rectangle", component: RectangleComponent },
      { path: "calculator", component: CalculatorComponent },
      { path: "home", component: HomeComponent },
      { path: "data-binding", component: DataBindingComponent },
      { path: "directives", component: DirectivesComponent },
      { path: "resistration-form", component: ResistrationFormComponent },
      { path: "time", component:TimeComponent},
      { path: "cart",component:CartComponent},
      { path: "grade-calculator",component:GradeCalculatorComponent},
      { path:"cars",component:CarsComponent},
      { path:"phones",component:PhonesComponent},
      {path:"create-user",component:CreateUserComponent},
      { path:"users",component:UsersComponent},
      {path:"create-student",component:CreateStudentComponent},
      {path:"dynamic-form",component:DynamicFormComponent}
    ]
  },
  { path: "vehicles",component:VehiclesComponent},
  { path: "memes",component:MemesComponent},
  {path:"flipkart",component:FlipkartComponent},
  { path:"accounts",component:AccountsComponent},
  { path:"mails",component:MailsComponent},
  {path:"boredoms",component:BoredomsComponent},
 
  { path: "", component: LoginComponent },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { GradeCalculatorComponent } from './grade-calculator/grade-calculator.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { ResistrationFormComponent } from './resistration-form/resistration-form.component';
import { TimeComponent } from './time/time.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "dashboard", component: DashboardComponent, children: [
      { path: "rectangle", component: RectangleComponent },
      { path: "calculator", component: CalculatorComponent },
      { path: "home", component: HomeComponent },
      { path: "data-binding", component: DataBindingComponent },
      { path: "directives", component: DirectivesComponent },
      { path: "resistration-form", component: ResistrationFormComponent },
      { path: "time", component:TimeComponent},
      { path: "cart",component:CartComponent},
      { path: "grade-calculator",component:GradeCalculatorComponent},
      { path:"cars",component:CarsComponent}
    ]
  },
  { path: "", component: LoginComponent },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

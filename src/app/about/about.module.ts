import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutDirectorComponent } from './about-director/about-director.component';
import { AboutHistoryComponent } from './about-history/about-history.component';



@NgModule({
  declarations: [
    AboutCeoComponent,
    AboutDirectorComponent,
    AboutHistoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutCeoComponent
  ]
})
export class AboutModule { }

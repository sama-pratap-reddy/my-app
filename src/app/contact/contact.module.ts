import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactPhoneComponent } from './contact-phone/contact-phone.component';
import { ContactAddressComponent } from './contact-address/contact-address.component';


@NgModule({
  declarations: [
    ContactPhoneComponent,
    ContactAddressComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }

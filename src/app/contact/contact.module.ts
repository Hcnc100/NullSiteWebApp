import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './componets/contact/contact.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FromContactComponent } from './componets/from-contact/from-contact.component';
import { ImageContactComponent } from './componets/image-contact/image-contact.component';




@NgModule({
  declarations: [
    ContactComponent,
    FromContactComponent,
    ImageContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    ContactComponent
  ]
})
export class ContactModule { }

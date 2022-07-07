import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivisionComponent } from './componets/division/division.component';
import { ButtonEditComponent } from './componets/button-edit/button-edit.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { BackToolbarComponent } from './componets/back-toolbar/back-toolbar.component';
import { LoadingComponent } from './componets/loading/loading.component';
import {LottieModule} from "ngx-lottie";



@NgModule({
  declarations: [
    DivisionComponent,
    ButtonEditComponent,
    BackToolbarComponent,
    LoadingComponent
  ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        LottieModule
    ],
  exports: [
    DivisionComponent,
    ButtonEditComponent,
    BackToolbarComponent,
    LoadingComponent
  ]
})
export class SharedModule { }

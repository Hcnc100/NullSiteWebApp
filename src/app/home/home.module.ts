import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './componets/main/home/home.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {EllipsisModule} from "ngx-ellipsis";
import {SharedModule} from "../shared/shared.module";
import { SocialLinksComponent } from './componets/main/social-links/social-links.component';
import { ImgProfileComponent } from './componets/main/img-profile/img-profile.component';
import { PersonalInfoComponent } from './componets/main/personal-info/personal-info.component';
import { EditInfoComponent } from './componets/edit-info/edit-info/edit-info.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormEditComponent } from './componets/edit-info/form-edit/form-edit.component';
import { EditPhotoComponent } from './componets/edit-info/edit-photo/edit-photo.component';
import {LottieModule} from "ngx-lottie";


@NgModule({
  declarations: [
    HomeComponent,
    SocialLinksComponent,
    ImgProfileComponent,
    PersonalInfoComponent,
    EditInfoComponent,
    FormEditComponent,
    EditPhotoComponent,
  ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        EllipsisModule,
        SharedModule,
        ReactiveFormsModule,
        LottieModule
    ],
  exports: [
    HomeComponent,
    EditInfoComponent
  ]
})
export class HomeModule { }

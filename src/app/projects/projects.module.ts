import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './componets/project/project.component';
import { CardComponent } from './componets/card/card.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {EllipsisModule} from "ngx-ellipsis";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    ProjectComponent,
    CardComponent
  ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        EllipsisModule,
        SharedModule
    ],
  exports: [
    ProjectComponent
  ]
})
export class ProjectsModule { }

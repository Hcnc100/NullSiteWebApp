import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './componets/skill/skill.component';
import { CardProgramingComponent } from './componets/card-programing/card-programing.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    SkillComponent,
    CardProgramingComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SkillComponent
  ]
})
export class SkillModule { }
